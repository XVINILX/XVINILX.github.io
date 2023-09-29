import axios from "axios";

export const getData = async () => {
  try {
    const response = await axios.get(
      "https://www.movebank.org/movebank/service/public/json?study_id=2911040&individual_local_identifiers=4262-84830876&max_events_per_individual=10&sensor_type=gps"
    );
    console.log(response.data);
    return response.data.individuals[0].study_id;
  } catch (err) {
    console.log(err);
  }
};
