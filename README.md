# PharmaDist_erp

## Server-side Installation guide
### Supported Oracle Database Versions
***
When *node-oracledb* is used in the default Thin mode, it connects directly to the Oracle Database and does not require Oracle Client libraries. Connections in this mode can be made to Oracle Database 12.1 or later.

When *node-oracledb* is in Thick mode using Oracle Client libraries, connections can be made to Oracle Database 9.2, or later, depending on the Oracle Client library version.

Oracle’s standard client-server network interoperability allows connections between different versions of Oracle Client libraries and Oracle Database. For currently certified configurations, see Oracle Support’s Doc ID 207303.1. In summary:

Oracle Client 21 can connect to Oracle Database 12.1 or later

Oracle Client 19, 18, and 12.2 can connect to Oracle Database 11.2 or later

Oracle Client 12.1 can connect to Oracle Database 10.2 or later

Oracle Client 11.2 can connect to Oracle Database 9.2 or later
Oracle Instant Client requires 12+ version to run. 
***
