export const UserModel = {
  async findByEmail(email: string) {
    if (email === 'admin@example.com') {
      return {
        id: '123',
        email,
        password: await Promise.resolve(
          '$2b$10$REPLACE_WITH_HASHED_PASSWORD' // bcrypt hashed password
        ),
      };
    }
    return null;
  },
};
