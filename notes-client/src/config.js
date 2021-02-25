const config = {
    MAX_ATTACHMENT_SIZE: 5000000,
    STRIPE_KEY: "pk_test_51IOlX6G2oVGaUnD8RCGKw5Q7lm2b0hYFWyk1hPxMeyrfLPIVOGec5512BpqbM0XdXpxjBLeDnnPDsis6iRAk8Agm00Y9IQrs21",
    s3: {
        REGION: "us-east-1",
        BUCKET: "notes-app-upload-jri",
    },
    apiGateway: {
        REGION: "us-east-1",
        URL: "https://gopa9skwpl.execute-api.us-east-1.amazonaws.com/prod",
    },
    cognito: {
        REGION: "us-east-1",
        USER_POOL_ID: "us-east-1_BEzn8Gnmh",
        APP_CLIENT_ID: "7fli9d95krui0a4vq2d57fqe91",
        IDENTITY_POOL_ID: "us-east-1:ff34ba85-9ca8-4709-91b6-7df0797b1cc3",
    },
};

export default config;