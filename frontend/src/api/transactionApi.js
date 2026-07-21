import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000/api",
})

export function getData() {
    return api.get("/data");
}

export function addData(transaction) {
    return api.post("/data", transaction);
}

// UPDATE transaction
export function updateData(id, updatedTransaction) {
  return api.put(`/data/${id}`, updatedTransaction);
}

// DELETE transaction
export function deleteData(id) {
  return api.delete(`/data/${id}`);
}