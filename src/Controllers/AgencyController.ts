import AgencyRepository from '../DataAccess/AgencyDB';
import { AgencyType } from '../Types/Agency.type';
import AgencyUseCases from '../UseCases/Agency';

const agencyRepository = new AgencyRepository();

export default class AgencyController {
  async createNewAgency(agency: AgencyType) {
    const newAgency = await AgencyUseCases.createAgency(
      agency,
      agencyRepository.createNewAgency,
    );
    return newAgency;
  }

  async getAllAgencies() {
    const allAgencies = await AgencyUseCases.getAllAgencies(
      agencyRepository.getAllAgencies,
    );
    return allAgencies;
  }

  async deleteAgencyById(id: number) {
    const deletedAgency = await AgencyUseCases.deleteAgency(
      id,
      agencyRepository.deleteAgencyById,
    );
    return deletedAgency;
  }
}
