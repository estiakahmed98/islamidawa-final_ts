import bcrypt from "bcrypt";
import { userData } from "@/app/data/userData";

const setCorsHeaders = (res) => {
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  res.headers.set("Access-Control-Max-Age", "86400");
};

export async function OPTIONS() {
  const response = new Response(null, { status: 204 });
  setCorsHeaders(response);
  return response;
}

export async function POST(req) {
  try {
    const { email, password, role } = await req.json();

    if (!email || !password || !role) {
      return new Response("All fields are required", { status: 400 });
    }

    console.log("Attempting login with:", { email, role });

    // Check if the user exists in userData
    const user = userData[email];

    if (!user || user.category !== role) {
      console.log("No user found with the provided email and role.");
      const response = new Response("Invalid credentials", { status: 401 });
      setCorsHeaders(response);
      return response;
    }

    // Verify the password
    const isPasswordValid = await bcrypt.compare(password, user.passwordHash);
    if (!isPasswordValid) {
      console.log("Invalid password.");
      const response = new Response("Invalid credentials", { status: 401 });
      setCorsHeaders(response);
      return response;
    }

    // Successful login: return user info without password
    const response = new Response(
      JSON.stringify({
        message: `Welcome ${role}!`,
        user: {
          email: user.email,
          role: user.category, // Assuming the role is stored as 'category' in userData
          name: user.name,
          id: user.id,
        },
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
    setCorsHeaders(response);
    return response;
  } catch (error) {
    console.error("Error during login:", error);
    const response = new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
    setCorsHeaders(response);
    return response;
  }
}

export async function GET(req) {
  try {
    // Optionally, you could list users from userData here if needed.
    const users = Object.values(userData);
    const response = new Response(JSON.stringify(users), { status: 200 });
    setCorsHeaders(response);
    return response;
  } catch (error) {
    console.error("Error fetching users:", error);
    const response = new Response(JSON.stringify({ error: error.message }), {
      status: 500,
    });
    setCorsHeaders(response);
    return response;
  }
}
