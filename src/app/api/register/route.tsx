import fs from "fs";
import path from "path";
import bcrypt from "bcrypt";

const userDataPath = path.join(process.cwd(), "/src/app/data/userData.jsx"); // Ensure this path is correct

export async function POST(req) {
  const {
    name,
    email,
    password,
    role,
    division,
    district,
    upazila,
    tunion,
    markaz,
    phoneNumber,
  } = await req.json();

  console.log("Received data:", {
    name,
    role,
    email,
    password,
    division,
    district,
    upazila,
    tunion,
    phoneNumber,
    markaz,
  });

  // Basic validation
  if (!name || !email || !password || !role) {
    return new Response("All fields are required", { status: 400 });
  }

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Read the userData file as plain text
    const fileContent = fs.readFileSync(userDataPath, "utf-8");

    // Extract the userData object
    let userData = {};
    const startIndex = fileContent.indexOf("{");
    const endIndex = fileContent.lastIndexOf("}");
    if (startIndex !== -1 && endIndex !== -1) {
      const jsonString = fileContent.slice(startIndex, endIndex + 1);
      userData = eval(`(${jsonString})`); // Safely parse the extracted JSON-like object
    }

    // Check if the email already exists
    if (userData[email]) {
      return new Response("Email already exists", { status: 400 });
    }

    // Create a new user object
    const newUser = {
      id: Date.now(), // Or use a unique ID generator
      name,
      category: role, // Assuming 'role' corresponds to 'category'
      division,
      district,
      upazila,
      union: tunion, // 'union' is taken from 'tunion'
      area: markaz, // 'markaz' corresponds to 'area'
      phone: phoneNumber,
      email,
      passwordHash: hashedPassword,
    };

    // Add the new user to the userData object
    userData[email] = newUser;

    // Write the updated userData back to the file in the required format
    const updatedFileContent = `export const userData = ${JSON.stringify(
      userData,
      null,
      2
    )};`;
    fs.writeFileSync(userDataPath, updatedFileContent, "utf-8");

    console.log("New user added:", newUser);
    return new Response(JSON.stringify(newUser), { status: 201 });
  } catch (error) {
    console.error(error);
    return new Response("User creation failed", { status: 500 });
  }
}
