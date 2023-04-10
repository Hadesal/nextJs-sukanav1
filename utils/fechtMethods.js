export const adminLogin = async (user) => {
  const response = await fetch("https://sukana.net/api/admin/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
};
