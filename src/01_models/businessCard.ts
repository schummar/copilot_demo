import { z } from "zod";

export type BusinessCard = z.infer<typeof BusinessCard>;

export const BusinessCard = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  joinedOn: z.date(),
});

// class BusinessCard {
//   public string Name { get; set; }
//   public string Phone { get; set; }
//   public string Email { get; set; }
//   public DateTime JoinedOn { get; set; }
// }
