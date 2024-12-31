import { userData } from "@/app/data/userData";

export async function GET(req, { params }) {
  try {
    const email = (await params).email;
    console.log("Get email:", email);

    const user = userData[email];

    console.log("Find user:", user);

    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    const { passwordHash, ...userWithoutPassword } = user;
    return new Response(JSON.stringify(userWithoutPassword), { status: 200 });
  } catch (error) {
    console.error("Error fetching user:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
    });
  }
}
