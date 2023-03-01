import { AgencyType } from '../../Types/Agency.type'

export async function createAgency(
    agency: AgencyType,
    createNewAgency: Function,
) {
    const result = await createNewAgency(agency)
    return result
}
