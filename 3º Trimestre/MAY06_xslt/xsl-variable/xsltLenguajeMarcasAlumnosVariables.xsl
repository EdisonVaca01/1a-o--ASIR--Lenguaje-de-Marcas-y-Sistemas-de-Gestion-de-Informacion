<?xml version="1.0" encoding="UTF-8"?>

<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:variable name = "totalEdades" select = "sum(//persona/edad)"/>
    <xsl:output method="html"/>
    <xsl:template match = "/">
            <html>
                 <head>
                    <title>Ejemplo de uso de plantillas</title>
                 </head>
                 <body>
                    <h1>Hola chicos de Lenguaje de Marcas</h1>
                    <p>La suma de las edades de todos los alumnos es : <xsl:value-of select = "$totalEdades" /></p>
                 </body>
            </html>
    </xsl:template>
</xsl:stylesheet>
