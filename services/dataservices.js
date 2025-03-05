const fetchData = async () => {
    const promise = await fetch("https://socialdashbackendar-hbgqhyhzbhe0bvdz.westus-01.azurewebsites.net/Socials/GetData");
    const response = await promise.json();
    // console.log(response[0])
    return response[0];
  };

  export {fetchData}