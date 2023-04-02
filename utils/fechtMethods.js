export const getImmobile = async () => {
  const response = await fetch("/api/allimmobiles");
  return await response.json();
};

export const getOneImmobile = async (projectNumber) => {
  const response = await fetch("/api/oneImmobile/" + projectNumber);
  return await response.json();
};
export const deleteOneImmobile = async (projectNumber) => {
  const response = await fetch("/api/deleteImmobile/" + projectNumber, {
    method: "DELETE",
  });
  return await response.json();
};
export const getFilteredImmobile = async (filterObject) => {
  const response = await fetch("/api/filterdImmobile", {
    method: "GET",
    body: filterObject,
  });
  return await response.json();
};

export const postImmobile = async (immobileObject) => {
  const response = await fetch("/api/postImmobile", {
    method: "POST",
    body: JSON.stringify(immobileObject),
    headers: { "Content-Type": "application/json" },
  });
  return await response.json();
};

export const adminLogin = async (user) => {
  const response = await fetch("/api/admin/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });

  return await response.json();
};
