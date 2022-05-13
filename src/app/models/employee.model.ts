export interface Employee {
    basicInformation: basicInformation,
    addressInformation: addressInformation,
    skills: [skills]
}

class basicInformation {
    firstName: string;
    lastName: string;
    contactNumber: string;
    email: string;
    birthday: Date
}

class addressInformation {
    streetAddress:  string;
    city:  string;
    postalCode: number;
    country:  string;
}

class skills {
    skill: string;
    yearsExperience:string;
    seniority: string;
}

