import axios from "axios";

const baykot = axios.create({
  baseURL: "https://boykot.kg",
})

export default baykot;