async function getPicture() {
  const pKey = process.env.PIXABAY_KEY;
  let location = encodeURI(localStorage.getItem("location"));

  async function getPic(key, loc) {
    try {
      const res = await fetch(
        `https://pixabay.com/api/?key=${key}&q=${loc}&image_type=photo`
      );
      return res;
    } catch (error) {
      console.log("An error has occured", error);
    }
  }

  getPic(pKey, location)
    .then((response) => response.json())
    .then(function (data) {
      localStorage.setItem("picture", data.hits[0].webformatURL);
    });
}

export { getPicture };
