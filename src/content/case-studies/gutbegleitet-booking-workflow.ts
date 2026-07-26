import type { BookingServiceWorkflowContent } from '@/components/case-study/BookingServiceWorkflowSection'

export const gutBegleitetBookingWorkflow = {
  whyItMatters: {
    title: 'Why the Booking System Matters',
    description:
      'The booking workflow changes the role of the website from a source of information into an entry point for daily service operations. Visitors can translate a service need into a structured request, while the organisation receives consistent customer, household, service, and duration information through one controlled workflow. Its purpose is broader than collecting enquiries: it standardises intake, creates an operational booking record, and establishes a reliable foundation for internal review, scheduling, reporting, and future digital service coordination.',
  },
  customerJourney: {
    title: 'Customer Booking Journey',
    description:
      'The guided journey turns an initial service need into a complete request while giving the visitor opportunities to review the selected appointment, service, duration, and personal information before submission.',
    steps: [
      { label: 'Visitor' },
      { label: 'Explore services' },
      { label: 'Open booking' },
      { label: 'Select appointment' },
      { label: 'Choose service' },
      { label: 'Choose duration' },
      { label: 'Enter personal details' },
      { label: 'Review & submit' },
      { label: 'Confirmation' },
      { label: 'Organisation receives request' },
    ],
  },
  operationalWorkflow: {
    title: 'Operational Workflow',
    description:
      'After submission, the customer-facing journey becomes an operational workflow. Current stages create and expose a structured request for internal handling; the final CRM stage is shown separately as a future opportunity.',
    stages: [
      {
        title: 'Booking Form',
        description:
          'Collects the requested appointment, service, duration, customer details, service address, and notes.',
        status: 'current',
      },
      {
        title: 'Input Validation',
        description:
          'Checks required information and consent before submission, with the service boundary validating the request again.',
        status: 'current',
      },
      {
        title: 'REST API',
        description:
          'An Express REST API exposes one controlled public booking endpoint, re-validating the request with the same rules the form already applied.',
        status: 'current',
      },
      {
        title: 'Supabase PostgreSQL',
        description:
          'Prisma persists the connected company, household, client, and booking records in Supabase PostgreSQL, creating the booking with an initial Requested status.',
        status: 'current',
      },
      {
        title: 'Booking Record Created',
        description:
          'Creates a website-sourced booking request with a unique identifier and an initial Requested status.',
        status: 'current',
      },
      {
        title: 'Internal Booking Workflow',
        description:
          'Makes the request available to the protected operational booking list and notification flow for internal review.',
        status: 'current',
      },
      {
        title: 'CRM Integration',
        description:
          'Could connect the same structured request to a future customer relationship workflow without replacing the booking intake.',
        status: 'future',
      },
    ],
  },
  dataStructure: {
    title: 'Booking Data Structure',
    description:
      'The booking workflow creates connected operational information rather than an unstructured message. This simplified business view combines booking, customer, household, and service context into one understandable request record.',
    entityName: 'Booking Request',
    fields: [
      { name: 'Booking ID' },
      { name: 'Service Type' },
      { name: 'Requested Appointment' },
      { name: 'Duration' },
      { name: 'Customer Name' },
      { name: 'Phone Number' },
      { name: 'Email' },
      { name: 'Service Address' },
      { name: 'Additional Notes' },
      { name: 'Booking Status' },
      { name: 'Request Source' },
      { name: 'Created At' },
    ],
    futureNote:
      'Because the request is structured, the same information can support future reporting, scheduling automation, CRM coordination, and wider operational management. These are extension opportunities, not claims about completed features in this section.',
  },
  businessValue: {
    title: 'Business Value',
    description:
      'The implemented workflow creates practical value through consistent intake, connected information, and a direct path from the public website into operational handling.',
    items: [
      {
        icon: 'requests',
        title: 'Standardised Service Requests',
        description:
          'Every submitted booking follows the same required structure for service, duration, customer, household, and contact information.',
      },
      {
        icon: 'centralised',
        title: 'Centralised Information',
        description:
          'Customer requests and their related service context are stored through one shared operational data foundation.',
      },
      {
        icon: 'workflow',
        title: 'Reduced Manual Administration',
        description:
          'Structured web requests reduce reliance on manually reconstructing service needs from separate phone calls or email messages.',
      },
      {
        icon: 'operations',
        title: 'Operational Readiness',
        description:
          'Requested bookings enter a protected internal workflow that provides a starting point for review and service coordination.',
      },
      {
        icon: 'scalable',
        title: 'Scalable Foundation',
        description:
          'The booking boundary can support additional operational services without requiring a separate intake structure for each one.',
      },
      {
        icon: 'experience',
        title: 'Guided User Experience',
        description:
          'Visitors can move through a clear sequence and review the information needed to submit a structured service request.',
      },
    ],
  },
} as const satisfies BookingServiceWorkflowContent
