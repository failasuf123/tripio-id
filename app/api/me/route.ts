import { cookies } from "next/dist/client/components/headers";

export async function GET() {
    const cookieStore = cookies

    console.log(cookieStore)
}