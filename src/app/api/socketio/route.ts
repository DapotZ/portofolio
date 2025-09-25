import { NextRequest } from "next/server";
import { Server as ServerIO } from "socket.io";
import { Server as NetServer } from "http";

let io: ServerIO | undefined;

export async function GET(req: NextRequest) {
  if (!io) {
    console.log("🔌 Starting Socket.IO server...");

    // @ts-ignore: akses langsung ke server Node.js
    const httpServer: NetServer =
      (req as any).socket?.server ?? (global as any).server;

    io = new ServerIO(httpServer, {
      path: "/api/socketio",
    });

    io.on("connection", (socket) => {
      console.log("✅ New client connected", socket.id);

      socket.on("msg-send", (msg) => {
        io?.emit("msg-receive", msg);
      });

      socket.on("disconnect", () => {
        console.log("❌ Client disconnected", socket.id);
      });
    });
  }

  return new Response("Socket.IO running", { status: 200 });
}
