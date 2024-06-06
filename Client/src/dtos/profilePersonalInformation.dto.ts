export interface ProfilePersonalInformationDto {
    name?: string;
    lastname?: string;
    email?: string;
    gender?: string;
    country?: string;
    timeZone?: string;
    lenguage?: string;
    industry?: string;
    aboutMe?: string;
    skills?: string;
    experience?: string;
    link_linkedin?: string;
    link_portfolio?: string;
    image?: Uint32Array; //TODO: revisar el tipo de la imagen
}
