import AgencyRepository from '../../DataAccess/AgencyDB'

export async function getAllAgencies(
    getAllAgencies: typeof AgencyRepository.prototype.getAllAgencies,
) {
    const result = await getAllAgencies()
    return result
}
