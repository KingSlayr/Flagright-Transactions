# Flagright-Transactions

![image](https://github.com/KingSlayr/Flagright-Transactions/assets/55028717/1bf45e97-1a5c-4c2e-b87c-6664d108ed8b)

<h2>API Endpoints</h2>

<h3>1. Create a New Transaction</h3>
<p><strong>Endpoint:</strong> <code>POST /transactions</code></p>
<p><strong>Description:</strong> This API endpoint allows users to create a new transaction with the provided details.</p>
<p><strong>Request Method:</strong> POST</p>
<p><strong>Request Payload:</strong> JSON data with the following fields:</p>
<ul>
  <li><code>amount</code> (Number, required): The transaction amount.</li>
  <li><code>description</code> (String, required): A description of the transaction.</li>
</ul>
<p><strong>Response:</strong> Returns the details of the created transaction, including the unique transaction ID and timestamp.</p>
<p><strong>Status Codes:</strong></p>
<ul>
  <li>201 Created: The transaction was successfully created.</li>
  <li>400 Bad Request: If the request payload is missing or invalid.</li>
  <li>500 Internal Server Error: In case of server-side issues.</li>
</ul>

<h3>2. Retrieve Transaction Details by Transaction ID</h3>
<p><strong>Endpoint:</strong> <code>GET /transactions/{transactionId}</code></p>
<p><strong>Description:</strong> This API endpoint retrieves details of a specific transaction based on its unique transaction ID.</p>
<p><strong>Request Method:</strong> GET</p>
<p><strong>Request Parameters:</strong> <code>{transactionId}</code> (String, required): The unique ID of the transaction.</p>
<p><strong>Response:</strong> Returns detailed information about the transaction, including <code>amount</code>, <code>description</code>, <code>datetime</code>, and other relevant fields.</p>
<p><strong>Status Codes:</strong></p>
<ul>
  <li>200 OK: The transaction was found and returned.</li>
  <li>404 Not Found: If the transaction with the provided ID does not exist.</li>
  <li>500 Internal Server Error: In case of server-side issues.</li>
</ul>
<h3>3. Search for Transactions</h3>
<p><strong>Endpoint:</strong> <code>GET /transactions/search</code></p>
<p><strong>Description:</strong> This API endpoint allows users to search for transactions based on specific criteria.</p>
<p><strong>Request Method:</strong> GET</p>
<p><strong>Query Parameters:</strong> Users can provide query parameters to filter transactions based on criteria such as:</p>
<ul>
  <li><code>amount</code> (Number): Filter transactions by a specific amount or range of amounts.</li>
  <li><code>dateRange</code> (Date Range): Search for transactions within a specified date range.</li>
  <li><code>description</code> (String): Search for transactions containing a particular keyword in the description.</li>
  <li>Other relevant query parameters.</li>
</ul>
<p><strong>Response:</strong> Returns a list of transactions that match the specified criteria.</p>
<p><strong>Status Codes:</strong></p>
<ul>
  <li>200 OK: Transactions matching the criteria were found and returned.</li>
  <li>400 Bad Request: If the query parameters are invalid.</li>
  <li>500 Internal Server Error: In case of server-side issues.</li>
</ul>

<h3>4. Generate Transaction Reports</h3>
<p><strong>Endpoint:</strong> <code>GET /reports</code></p>
<p><strong>Description:</strong> This API endpoint allows users to generate transaction reports based on specified parameters.</p>
<p><strong>Request Method:</strong> GET</p>
<p><strong>Query Parameters:</strong> Users can specify parameters such as:</p>
<ul>
  <li><code>period</code> (String, required): The period for the report (e.g., daily, monthly).</li>
  <li><code>reportType</code> (String, required): The type of report to generate (e.g., summary, total amount).</li>
  <li>Other relevant query parameters.</li>
</ul>
<p><strong>Response:</strong> Returns the requested transaction report as structured data (e.g., JSON or CSV).</p>
<p><strong>Status Codes:</strong></p>
<ul>
  <li>200 OK: The report was generated successfully and returned.</li>
  <li>400 Bad Request: If the query parameters are missing or invalid.</li>
  <li>500 Internal Server Error: In case of server-side issues.</li>
</ul>

<h3>5. Control CRON Job (Start/Stop)</h3>
<p><strong>Endpoints:</strong> <code>POST /cronjob/start</code> and <code>POST /cronjob/stop</code></p>
<p><strong>Description:</strong> These API endpoints allow users to control the background CRON job responsible for generating transactions. The <code>start</code> endpoint starts the CRON job, while the <code>stop</code> endpoint halts it.</p>
<p><strong>Request Method:</strong> POST</p>
<p><strong>Response:</strong> Returns a confirmation message indicating whether the CRON job has been started or stopped.</p>
<p><strong>Status Codes:</strong></p>
<ul>
  <li>200 OK: The CRON job was started or stopped successfully.</li>
  <li>500 Internal Server Error: In case of server-side issues.</li>
</ul>


