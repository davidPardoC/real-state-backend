import AgencyRepository from '../../DataAccess/AgencyDB'

export async function deleteAgency(
    id: number,
    deleteAgencyFromDB: typeof AgencyRepository.prototype.deleteAgencyById,
) {
    const result = await deleteAgencyFromDB(id)
    return result
}
