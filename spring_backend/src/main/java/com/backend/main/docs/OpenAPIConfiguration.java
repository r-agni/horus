package com.backend.main.docs;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
        info = @Info(
                title = "Detecting Eye Disease",
                description = "" +
                        "Backend API for Detecting Eye Disase",
                contact = @Contact(
                        name = "Alexander Mehta",
                        email = "alexandermehta@outlook.com"
                )
        )
        ,servers = @Server(url = "http://71.204.171.183:89")
)

class OpenAPIConfiguration {
}
