// import { userData } from "@/app/data/userData";

// export async function GET(req, { params }) {
//   try {
//     console.log("Fetching user details...");
//     const { id } = params;

//     if (!id) {
//       console.log("No ID provided");
//       return new Response(JSON.stringify({ message: "User ID is required" }), {
//         status: 400,
//       });
//     }

//     // Searching for the user by email (id parameter should be email in this case)
//     const user = userData[id];

//     if (!user) {
//       console.log("User not found");
//       return new Response(JSON.stringify({ message: "User not found" }), {
//         status: 404,
//       });
//     }

//     console.log("User details fetched successfully");
//     return new Response(JSON.stringify(user), {
//       status: 200,
//       headers: { "Content-Type": "application/json" },
//     });
//   } catch (error) {
//     console.log("Error fetching user:", error.message, error.stack);
//     return new Response(JSON.stringify({ message: "Internal Server Error" }), {
//       status: 500,
//     });
//   }
// }

// // Delete user based on email (same as GET)
// export async function DELETE(req, { params }) {
//   const { id } = params;

//   try {
//     if (!id) {
//       return new Response(JSON.stringify({ message: "User ID is required" }), {
//         status: 400,
//       });
//     }

//     // Check if the user exists in userData
//     if (!userData[id]) {
//       return new Response(JSON.stringify({ message: "User not found" }), {
//         status: 404,
//       });
//     }

//     // Simulate user deletion by removing from the object
//     delete userData[id];

//     return new Response(
//       JSON.stringify({ message: "User deleted successfully" }),
//       { status: 200 }
//     );
//   } catch (error) {
//     console.error("Error deleting user:", error);
//     return new Response("Failed to delete user", { status: 500 });
//   }
// }
