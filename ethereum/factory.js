import web3 from "./web3";
import compiledFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(compiledFactory.interface),
  '0xeF1E19Ac38BC29F85b40dF08f58eAC375baEC1be'
);

export default instance;