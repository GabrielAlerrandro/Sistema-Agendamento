"use server"

import { db } from "@/lib/prisma"
import { revalidatePath } from "next/cache"

export const CancelBooking = async (bookingID: string) => {
  await db.booking.delete({
    where: {
      id: bookingID,
    },
  })
  revalidatePath("/")
  revalidatePath("/bookings")
}
