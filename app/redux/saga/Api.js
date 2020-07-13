import * as Service from '../../services/CustomHttpService';

export const doGet = (endpoint, body) => {
  return Service.axiosGet({
    body,
    endpoint,
  });
};

export const doPost = (endpoint, body) => {
  return Service.axiosPost({
    body,
    endpoint,
  });
};

export const doFoursquareGet = (filter) => {
  return Service.fourSquareGet({
    filter,
  });
};

//demo api call
//Start
// Contracts
export const getContracts = (paginate) => {
  return doGet('/contracts?p=' + paginate.page + '&l=' + paginate.limit);
};
export const getContractsCount = () => {
  return doGet('/contractsCount');
};
export const searchContracts = (value) => {
  return doGet('/contracts?f=' + value + '&p=' + 0 + '&l=' + 1000);
};

//End
