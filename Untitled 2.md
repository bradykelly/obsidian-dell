Microsoft.Data.SqlClient.SqlException (0x80131904): Login failed for user 'sqroot'.
   at Microsoft.Data.SqlClient.SqlInternalConnection.OnError(SqlException exception, Boolean breakConnection, Action`1 wrapCloseInAction)
   at Microsoft.Data.SqlClient.TdsParser.ThrowExceptionAndWarning(TdsParserStateObject stateObj, Boolean callerHasConnectionLock, Boolean asyncClose)
   at Microsoft.Data.SqlClient.TdsParser.TryRun(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj, Boolean& dataReady)
   at Microsoft.Data.SqlClient.TdsParser.Run(RunBehavior runBehavior, SqlCommand cmdHandler, SqlDataReader dataStream, BulkCopySimpleResultSet bulkCopyHandler, TdsParserStateObject stateObj)
   at Microsoft.Data.SqlClient.SqlInternalConnectionTds.CompleteLogin(Boolean enlistOK)
   at Microsoft.Data.SqlClient.SqlInternalConnectionTds.AttemptOneLogin(ServerInfo serverInfo, String newPassword, SecureString newSecurePassword, Boolean ignoreSniOpenTimeout, TimeoutTimer timeout, Boolean withFailover)
   at Microsoft.Data.SqlClient.SqlInternalConnectionTds.LoginNoFailover(ServerInfo serverInfo, String newPassword, SecureString newSecurePassword, Boolean redirectedUserInstance, SqlConnectionString connectionOptions, SqlCredential credential, TimeoutTimer timeout)
   at Microsoft.Data.SqlClient.SqlInternalConnectionTds.OpenLoginEnlist(TimeoutTimer timeout, SqlConnectionString connectionOptions, SqlCredential credential, String newPassword, SecureString newSecurePassword, Boolean redirectedUserInstance)
   at Microsoft.Data.SqlClient.SqlInternalConnectionTds..ctor(DbConnectionPoolIdentity identity, SqlConnectionString connectionOptions, SqlCredential credential, Object providerInfo, String newPassword, SecureString newSecurePassword, Boolean redirectedUserInstance, SqlConnectionString userConnectionOptions, SessionData reconnectSessionData, Boolean applyTransientFaultHandling, String accessToken, DbConnectionPool pool)
   at Microsoft.Data.SqlClient.SqlConnectionFactory.CreateConnection(DbConnectionOptions options, DbConnectionPoolKey poolKey, Object poolGroupProviderInfo, DbConnectionPool pool, DbConnection owningConnection, DbConnectionOptions userOptions)
   at Microsoft.Data.ProviderBase.DbConnectionFactory.CreatePooledConnection(DbConnectionPool pool, DbConnection owningObject, DbConnectionOptions options, DbConnectionPoolKey poolKey, DbConnectionOptions userOptions)
   at Microsoft.Data.ProviderBase.DbConnectionPool.CreateObject(DbConnection owningObject, DbConnectionOptions userOptions, DbConnectionInternal oldConnection)
   at Microsoft.Data.ProviderBase.DbConnectionPool.UserCreateRequest(DbConnection owningObject, DbConnectionOptions userOptions, DbConnectionInternal oldConnection)
   at Microsoft.Data.ProviderBase.DbConnectionPool.TryGetConnection(DbConnection owningObject, UInt32 waitForMultipleObjectsTimeout, Boolean allowCreate, Boolean onlyOneCheckConnection, DbConnectionOptions userOptions, DbConnectionInternal& connection)
   at Microsoft.Data.ProviderBase.DbConnectionPool.WaitForPendingOpen()
--- End of stack trace from previous location ---
   at Microsoft.Data.SqlClient.SqlRetryLogicProvider.ExecuteAsync(Object sender, Func`1 function, CancellationToken cancellationToken)
   at Microsoft.Data.SqlClient.SqlRetryLogicProvider.ExecuteAsync(Object sender, Func`1 function, CancellationToken cancellationToken)
   at Microsoft.SqlTools.ServiceLayer.Connection.ReliableConnection.ReliableSqlConnection.<>c__DisplayClass30_0.<<OpenAsync>b__0>d.MoveNext() in /_/src/Microsoft.SqlTools.ManagedBatchParser/ReliableConnection/ReliableSqlConnection.cs:line 319
--- End of stack trace from previous location ---
   at Microsoft.SqlTools.ServiceLayer.Connection.ConnectionService.TryOpenConnection(ConnectionInfo connectionInfo, ConnectParams connectionParams) in /_/src/Microsoft.SqlTools.ServiceLayer/Connection/ConnectionService.cs:line 712
ClientConnectionId:5766723e-edb1-4f15-a4a2-765bed74e482
Error Number:18456,State:1,Class:14