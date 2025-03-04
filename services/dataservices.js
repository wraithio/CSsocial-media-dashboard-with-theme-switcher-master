const fetchData = async (platform) => {
    const promise = await fetch("https://socialdashbackendar-hbgqhyhzbhe0bvdz.westus-01.azurewebsites.net/Socials/GetData");
    const response = await promise.json();
    console.log(response)
    return response[0][`${platform}`];
  };

  export {fetchData}