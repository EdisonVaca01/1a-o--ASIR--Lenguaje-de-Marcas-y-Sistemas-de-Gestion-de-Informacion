<?xml version="1.0"?>
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
    <xsl:output method="xml"/>
    <xsl:template match = "/">
        <alumnos>
            <xsl:for-each select = "//alumno">
                <alumno>
                    <xsl:copy-of select = "./*"/>
                    <xsl:element name = "img"/>
                </alumno>
            </xsl:for-each>
        </alumnos>
    </xsl:template>
</xsl:stylesheet>
