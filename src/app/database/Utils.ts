import bcrypt from "bcryptjs";

export const hashPassword = async (password: string): Promise<string> => {
  // Hash the password before storing it in the database
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

export const getRandomId = () => {
  return Math.random().toString(36).substring(2, 10);
};

export const comparePassword = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  // Compares the hashed password with the stored password
  return await bcrypt.compareSync(password, hashedPassword);
};
