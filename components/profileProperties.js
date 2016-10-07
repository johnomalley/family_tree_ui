import moment from 'moment'
import displayName from './displayName'

const property = (label, value, type = 'default') => value ? {label, value, type} : null

const profileProperties = (member) => [
    property('Name', displayName(member)),
    property('Birthday', moment(member.dob).format('MMMM D (YYYY)')),
    property('e-mail', member.email, 'email'),
    property('Phone', member.phone, 'phone'),
    property('Spouse', member.spouse, 'member'),
    property('Partner', member.partner, 'member')
].filter(Boolean)

export default profileProperties