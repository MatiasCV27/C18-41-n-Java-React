package com.nocountry.swapitup.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeIn;
import io.swagger.v3.oas.annotations.enums.SecuritySchemeType;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.info.License;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import io.swagger.v3.oas.annotations.security.SecurityScheme;
import io.swagger.v3.oas.annotations.servers.Server;
import org.springframework.http.HttpHeaders;

@OpenAPIDefinition(
        info = @Info(
                title = "Api de SwapItUp",
                description = "Nuestra app es una plataforma para el intercambio de habilidades",
                version = "1.0.0",
                contact = @Contact(
                        name = "Matias Criollo Vigo",
                        url = "https://github.com/MatiasCV27/C18-41-n-Java-React",
                        email = "swapitup@gmail.com"
                ),
                license = @License(
                        name = "Standar Software Use License For SwapItUp",
                        url = "https://github.com/MatiasCV27/C18-41-n-Java-React",
                        identifier = "175.781.256"
                )
        ),
        servers = {
                @Server(
                        description = "DEV SERVER",
                        url = "http://localhost:8080"
                ),
                @Server(
                        description = "PROD SERVER",
                        url = "http://swapitup:8080"
                )
        },
        security = @SecurityRequirement(
                name = "Security Token"
        )
)
@SecurityScheme(
        name = "Security Token",
        description = "Access token for SwapItUp API",
        type = SecuritySchemeType.HTTP,
        paramName = HttpHeaders.AUTHORIZATION,
        in = SecuritySchemeIn.HEADER,
        scheme = "bearer",
        bearerFormat = "JWT"

)
public class SwaggerConfig {
}
