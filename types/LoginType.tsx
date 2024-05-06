export type LoginType = {
   jwtToken: string;
   userId: string;
   verificationResponse: string;
};

export type VerificationResponse = {
   success: boolean;
   challenge_ts: string;
   hostname: string;
};
