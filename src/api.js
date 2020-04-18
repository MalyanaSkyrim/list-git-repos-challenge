import axios from "axios";

export const loadReposByPage = async page => {
  console.log("loadReposByPage", { page });
  const dateBefore = getDateBefore(30);
  axios.defaults.baseURL = "https://api.github.com";
  const res = await axios.get(
    "/search/repositories?q=created:>" +
      dateBefore +
      "&sort=stars&order=desc&page=" +
      page
  );

  return { data: res, hasMore: page < 9 };
};

const getDateBefore = days => {
  var today = new Date();
  today.setDate(today.getDate() - days);
  return today
    .toISOString()
    .substring(0, 10)
    .trim();
};
