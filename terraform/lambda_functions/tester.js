"use strict";

/* EXAMPLE EXECUTION (change 'npk' to your actual AWSCLI profile):
export AWS_ACCESS_KEY_ID=`aws configure get npkdirect.aws_access_key_id`;
export AWS_SECRET_ACCESS_KEY=`aws configure get npkdirect.aws_secret_access_key`;
node ./tester.js
*/


/* Proxy API Handler */
var handler = require("./proxy_api_handler/main");

//POST Campaign
var sim = JSON.parse('{"event":{"resource":"/userproxy/{proxy+}","path":"/v1/userproxy/campaign","httpMethod":"POST","headers":{"Accept":"application/json","Accept-Encoding":"gzip, deflate, br","Accept-Language":"en-US,en;q=0.9","CloudFront-Forwarded-Proto":"https","CloudFront-Is-Desktop-Viewer":"true","CloudFront-Is-Mobile-Viewer":"false","CloudFront-Is-SmartTV-Viewer":"false","CloudFront-Is-Tablet-Viewer":"false","CloudFront-Viewer-Country":"US","content-type":"application/x-www-form-urlencoded","Host":"api.dev.npkproject.io","origin":"http://localhost","Referer":"http://localhost/","User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36","Via":"2.0 e272b56ab8dd1450f3dbafeb0f3671a9.cloudfront.net (CloudFront)","X-Amz-Cf-Id":"A9nXiHbOExyXOHnl-2N835ZYT4ZjkqXR1VKG3ywoza4idIzSRYI9cQ==","x-amz-date":"20181127T065656Z","x-amz-security-token":"AgoGb3JpZ2luEGoaCXVzLXdlc3QtMiKAAiB2t14FBMR0I4whJsH6Q1cWYc8KC7wko545FycoqmJVYCjioNqivA8lUqPomr0cs38+xfXX+h3ITtM/B8Qeeepya+AHYTDq620E+tHjinBxW5RIRqbGB5mEYfKcLCCVl0bSE5ABdTpiScOr2YqW/aHy7dV+NDKvWZNyoltsgAcCjQKWitO6x23bpT+Qf8N9eCNkBomeY7Ad04E+wc1DHMEnhY7c0z2QO6pbSJY/tXuKFJCU5+W8QSp9lycBEuH3MkOSOQYsijMs0+cWiNbTzRLH4t+edVwdkf0EZFYM8Ewe/xCkyLeqTjTPn6lgFswgD/yrmOMVto75DHorz96IS7cqpgUIEBAAGgw4OTIyMDUxMTU1NjYiDM42Ra/uQcFVILls9iqDBSMnTsq1gqe161mvylCCoA1LvUC9eqAu4QbgUazOdCsj6Zh5MDwP6DdhGKEd3FPhJjTU8S1/J3FKbvJfVzSAgdx9WBK8F99iRtvAeMQT9MJab20dbYeEFT4+g3OAogXuKC92fC4EwmmpkY5KTbx9xrXDXxeXwGUgOk7uZEQX7iXsC6a09GgTTLL+UvxUy/M8Py4o1H02sBFwPgOyZ5yRfz4gHByqjWzBOkJihL6qoZAtVjS8s4wmn7sC5T1ckFMXe8TF18s8Upjm/O1npJYMJZ2OkG2n4Cx7GBGoYLSDW0hsarqyAPNGHq8mo3oWw9uysgjklZuFCRqOAEBm41NxXW64VrB3BKQHxnD/uyLqV/HfkAqzIYryTiOzqp8qL2JxkdexHM+cb2i0C2gK4D9/fEs8Jj3n8/HvtNCEVcLq/JXo2lcXmduKZq0i5TfwmSePGMorScReZZ0bj/55vbEp5QtVu8YoPJpxR6Cb5rzGAp/7D0t8lufv1xlJsj0P9ygbOkfYAQDkrlrtMkdjuf/3vK1BbrJl5ypt4cjb0E3BKlmlw5BwGkOIdvnpRkfJido1stvWv2SfKtke7909Zyi5wyYaEtzcl66a0/D8U6uV3klo7VBbjptJ3MpgIv7dYoAwReSGurJ3Ih6C4jMpdlbDABn0w267wfLdebk9zrSvigqzmZQTD2/MHiR8GKU49RMr0o2o8Sr0nq/6Lw5ITf7qKBDRB2OM1FfBl8y+NpWeeuooRcjnZvKDUO/PzeGV6EGrKw03dgoEerj70pyMaU0z+2c9mTnMSetTS7IYqn6hLZ0Pyjlut7Rs9yXu932H0prVCRUhIPEWO9oLHpf2NtULaDExaTUw/czz3wU=","X-Amzn-Trace-Id":"Root=1-5bfceab8-8d8ecd80bb833f18e5bfeaa8","X-Forwarded-For":"50.194.54.222, 52.46.17.6","X-Forwarded-Port":"443","X-Forwarded-Proto":"https"},"multiValueHeaders":{"Accept":["application/json"],"Accept-Encoding":["gzip, deflate, br"],"Accept-Language":["en-US,en;q=0.9"],"CloudFront-Forwarded-Proto":["https"],"CloudFront-Is-Desktop-Viewer":["true"],"CloudFront-Is-Mobile-Viewer":["false"],"CloudFront-Is-SmartTV-Viewer":["false"],"CloudFront-Is-Tablet-Viewer":["false"],"CloudFront-Viewer-Country":["US"],"content-type":["application/x-www-form-urlencoded"],"Host":["api.dev.npkproject.io"],"origin":["http://localhost"],"Referer":["http://localhost/"],"User-Agent":["Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36"],"Via":["2.0 e272b56ab8dd1450f3dbafeb0f3671a9.cloudfront.net (CloudFront)"],"X-Amz-Cf-Id":["A9nXiHbOExyXOHnl-2N835ZYT4ZjkqXR1VKG3ywoza4idIzSRYI9cQ=="],"x-amz-date":["20181127T065656Z"],"x-amz-security-token":["AgoGb3JpZ2luEGoaCXVzLXdlc3QtMiKAAiB2t14FBMR0I4whJsH6Q1cWYc8KC7wko545FycoqmJVYCjioNqivA8lUqPomr0cs38+xfXX+h3ITtM/B8Qeeepya+AHYTDq620E+tHjinBxW5RIRqbGB5mEYfKcLCCVl0bSE5ABdTpiScOr2YqW/aHy7dV+NDKvWZNyoltsgAcCjQKWitO6x23bpT+Qf8N9eCNkBomeY7Ad04E+wc1DHMEnhY7c0z2QO6pbSJY/tXuKFJCU5+W8QSp9lycBEuH3MkOSOQYsijMs0+cWiNbTzRLH4t+edVwdkf0EZFYM8Ewe/xCkyLeqTjTPn6lgFswgD/yrmOMVto75DHorz96IS7cqpgUIEBAAGgw4OTIyMDUxMTU1NjYiDM42Ra/uQcFVILls9iqDBSMnTsq1gqe161mvylCCoA1LvUC9eqAu4QbgUazOdCsj6Zh5MDwP6DdhGKEd3FPhJjTU8S1/J3FKbvJfVzSAgdx9WBK8F99iRtvAeMQT9MJab20dbYeEFT4+g3OAogXuKC92fC4EwmmpkY5KTbx9xrXDXxeXwGUgOk7uZEQX7iXsC6a09GgTTLL+UvxUy/M8Py4o1H02sBFwPgOyZ5yRfz4gHByqjWzBOkJihL6qoZAtVjS8s4wmn7sC5T1ckFMXe8TF18s8Upjm/O1npJYMJZ2OkG2n4Cx7GBGoYLSDW0hsarqyAPNGHq8mo3oWw9uysgjklZuFCRqOAEBm41NxXW64VrB3BKQHxnD/uyLqV/HfkAqzIYryTiOzqp8qL2JxkdexHM+cb2i0C2gK4D9/fEs8Jj3n8/HvtNCEVcLq/JXo2lcXmduKZq0i5TfwmSePGMorScReZZ0bj/55vbEp5QtVu8YoPJpxR6Cb5rzGAp/7D0t8lufv1xlJsj0P9ygbOkfYAQDkrlrtMkdjuf/3vK1BbrJl5ypt4cjb0E3BKlmlw5BwGkOIdvnpRkfJido1stvWv2SfKtke7909Zyi5wyYaEtzcl66a0/D8U6uV3klo7VBbjptJ3MpgIv7dYoAwReSGurJ3Ih6C4jMpdlbDABn0w267wfLdebk9zrSvigqzmZQTD2/MHiR8GKU49RMr0o2o8Sr0nq/6Lw5ITf7qKBDRB2OM1FfBl8y+NpWeeuooRcjnZvKDUO/PzeGV6EGrKw03dgoEerj70pyMaU0z+2c9mTnMSetTS7IYqn6hLZ0Pyjlut7Rs9yXu932H0prVCRUhIPEWO9oLHpf2NtULaDExaTUw/czz3wU="],"X-Amzn-Trace-Id":["Root=1-5bfceab8-8d8ecd80bb833f18e5bfeaa8"],"X-Forwarded-For":["50.194.54.222, 52.46.17.6"],"X-Forwarded-Port":["443"],"X-Forwarded-Proto":["https"]},"queryStringParameters":null,"multiValueQueryStringParameters":null,"pathParameters":{"proxy":"campaign"},"stageVariables":null,"requestContext":{"resourceId":"21tcvc","resourcePath":"/userproxy/{proxy+}","httpMethod":"POST","extendedRequestId":"RAmc1Hl1PHcFToA=","requestTime":"27/Nov/2018:06:56:56 +0000","path":"/v1/userproxy/campaign","accountId":"892205115566","protocol":"HTTP/1.1","stage":"v1","domainPrefix":"api","requestTimeEpoch":1543301816514,"requestId":"a10cda32-f211-11e8-a003-1d4c6934ba7d","identity":{"cognitoIdentityPoolId":"us-west-2:804f962c-dbf0-4cb3-89d8-799110696b31","accountId":"892205115566","cognitoIdentityId":"us-west-2:b8eb71dd-3fe2-44ae-bfa2-0d0ab3a22743","caller":"AROAJ555JTA7CRPEFMDXE:CognitoIdentityCredentials","sourceIp":"50.194.54.222","accessKey":"ASIA47O4RVCXAYQ2HOG3","cognitoAuthenticationType":"authenticated","cognitoAuthenticationProvider":"cognito-idp.us-west-2.amazonaws.com/us-west-2_ZokBjJS8x,cognito-idp.us-west-2.amazonaws.com/us-west-2_ZokBjJS8x:CognitoSignIn:dff6dfea-45eb-4870-b697-cdcfc05692ec","userArn":"arn:aws:sts::892205115566:assumed-role/cognito_authenticated_role_20181005031702531300000001/CognitoIdentityCredentials","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36","user":"AROAJ555JTA7CRPEFMDXE:CognitoIdentityCredentials"},"domainName":"api.dev.npkproject.io","apiId":"eg8uhhcgg9"},"body":"test","isBase64Encoded":false},"context":{"callbackWaitsForEmptyEventLoop":true,"logGroupName":"/aws/lambda/proxy_api_handler","logStreamName":"2018/11/27/[$LATEST]72b8e7cc291c40f59a0ad1d9890931a6","functionName":"proxy_api_handler","memoryLimitInMB":"128","functionVersion":"$LATEST","invokeid":"a10f9997-f211-11e8-a029-91d9e4a3a1af","awsRequestId":"a10f9997-f211-11e8-a029-91d9e4a3a1af","invokedFunctionArn":"arn:aws:lambda:us-west-2:892205115566:function:proxy_api_handler"},"success":true}');
sim.event.body = JSON.parse('{"region":"us-west-2","availabilityZone":"us-west-2c","instanceType":"p2.xlarge","hashFile":"uploads/md5sums","hashFileUrl":"","instanceCount":"1","instanceDuration":"6","priceTarget":1.35,"mask":"?a","dictionaryFile":"wordlist/rockyou.7z","rulesFiles":["rules/d3ad0ne.rule.7z"]}');
sim.event.body.hashFileUrl = "https://npk-user-data-20181002224350176600000001.s3.us-west-2.amazonaws.com/us-west-2%3Ab8eb71dd-3fe2-44ae-bfa2-0d0ab3a22743/uploads/md5sums?AWSAccessKeyId=ASIA47O4RVCXPIAF3R67&Expires=1545767657&Signature=cnrZBLtAcQjtGLtH9o%2BGvyvb8Ns%3D&x-amz-security-token=AgoGb3JpZ2luEBYaCXVzLXdlc3QtMiKAApRSKbWl8CUinrcpIYI6QKd1gvdVZdrHOWkjnzW9au%2ByViHpMsArv4tcNlS4v4mvobQXa4KmlLhWAtklzrQ5NHQd%2BeOJS3KKzYETAYOMQJb7%2BtdnJA%2B%2BwBdqiyXwVQ10NSK1yOWpBg8TQPxcS4NaImIFDiqJPYa1w92aypX%2BV4204LWyMOw6YXizh9u7z%2BmT%2Fc6MWKamhgO8pzvhoL2PD%2BudLQ1RI1zRtZJ2hwDJv3MgV19Q5QWQt%2BTIpZxx6%2Fov0MfM21iTIlrYrK8VD%2BW800Vk08qo2dirtTn5Vk78hFzSuy5N4xPflketVazh3LnO4aSS8WgnIm6eDhu7jQ7Ssu0qrwUI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw4OTIyMDUxMTU1NjYiDBJPVbYJwM0WONnMpCqDBSFxOaz44Jn%2FvbOGt4bxFLx9ccApyeORFqXgiQfDIS2NYPvmhqfm3d7zMTUzbbt483ogSefA09VEJaNbW5hBvSsbqC%2FUCW6%2FuuWCT2ofzukbLGAAQF3Xh665iUCziGY30G6Gmdtl41028TVBYS%2FIlgwzZVQjkLvGbnAgoBEtNZe9cmEthuCRAj0ZtV8twYk2ngnYyFYSoMuhxbYSC9ReQ6147t2wvH8yWS%2FDCxcxcFvu8Ztg40zKa9R5faSdv0zaHGBBG4Dp6XduTTlQY1LFwauFzMFOEBgantVGKILTYUkfb4oIPnhei8ebUEDXO9DPyzoQrT7n%2FHFYypRXCuZ9oIWsOR8XgGPM66qxbdt1cGq0smeQn8ZapA5llC0M9p%2FO7eUhorL3MjOKOkRFVF1cXFIBxUR3aFmvCSddO1iKUyStN5%2B4pVS%2F1kLYH8IRnHM2aHfo3AXCF5BFmH9Q1ZzVggGuGlnoKPtUqx8JKzYcfYtQC0R5cYqY3RsHmPB9f3b4EWetDeGMwDc%2Ft5kb8UDUieZIO8RHIYfGR7mwPiP4OZh1Hv3BbCQZDPhfnWZkWHeG5u686YxUygzaQnWoBsu9Zh9rWXUm%2FTRbNdqE%2Ff0ZJ2nmY3hXNfRh8Po0VgBRq1blxOQup4KfKN6ce2W2mtVLuGBGZQWku7U70Y073vPr0lsBOxkZVeZ0wahjJb538fBjNETYoZbVpzZchFrYK1iW8LehhYkI7ojM%2BHm%2BLCPlC%2B5rE8BQE%2Bhh9T6yofXHXfCBVRUsWTI5EVW2%2BCMrLCjrYKrwUu5KxTzOQb8ftp%2BbZWephgUvY4yjALWzD85PHzw3SeZEwRHhp1AzKuZRrbD%2F7CFF%2BMYwzuGJ4QU%3D";
sim.event.body = JSON.stringify(sim.event.body);

console.log(JSON.stringify(sim.event));
// DELETE Campaign
// var sim = JSON.parse('{"event":{"resource":"/userproxy/{proxy+}","path":"/v1/userproxy/campaign/12344","httpMethod":"DELETE","headers":{"Accept":"application/json","Accept-Encoding":"gzip, deflate, br","Accept-Language":"en-US,en;q=0.9","CloudFront-Forwarded-Proto":"https","CloudFront-Is-Desktop-Viewer":"true","CloudFront-Is-Mobile-Viewer":"false","CloudFront-Is-SmartTV-Viewer":"false","CloudFront-Is-Tablet-Viewer":"false","CloudFront-Viewer-Country":"US","content-type":"application/x-www-form-urlencoded","Host":"api.dev.npkproject.io","origin":"http://localhost","Referer":"http://localhost/","User-Agent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36","Via":"2.0 e272b56ab8dd1450f3dbafeb0f3671a9.cloudfront.net (CloudFront)","X-Amz-Cf-Id":"A9nXiHbOExyXOHnl-2N835ZYT4ZjkqXR1VKG3ywoza4idIzSRYI9cQ==","x-amz-date":"20181127T065656Z","x-amz-security-token":"AgoGb3JpZ2luEGoaCXVzLXdlc3QtMiKAAiB2t14FBMR0I4whJsH6Q1cWYc8KC7wko545FycoqmJVYCjioNqivA8lUqPomr0cs38+xfXX+h3ITtM/B8Qeeepya+AHYTDq620E+tHjinBxW5RIRqbGB5mEYfKcLCCVl0bSE5ABdTpiScOr2YqW/aHy7dV+NDKvWZNyoltsgAcCjQKWitO6x23bpT+Qf8N9eCNkBomeY7Ad04E+wc1DHMEnhY7c0z2QO6pbSJY/tXuKFJCU5+W8QSp9lycBEuH3MkOSOQYsijMs0+cWiNbTzRLH4t+edVwdkf0EZFYM8Ewe/xCkyLeqTjTPn6lgFswgD/yrmOMVto75DHorz96IS7cqpgUIEBAAGgw4OTIyMDUxMTU1NjYiDM42Ra/uQcFVILls9iqDBSMnTsq1gqe161mvylCCoA1LvUC9eqAu4QbgUazOdCsj6Zh5MDwP6DdhGKEd3FPhJjTU8S1/J3FKbvJfVzSAgdx9WBK8F99iRtvAeMQT9MJab20dbYeEFT4+g3OAogXuKC92fC4EwmmpkY5KTbx9xrXDXxeXwGUgOk7uZEQX7iXsC6a09GgTTLL+UvxUy/M8Py4o1H02sBFwPgOyZ5yRfz4gHByqjWzBOkJihL6qoZAtVjS8s4wmn7sC5T1ckFMXe8TF18s8Upjm/O1npJYMJZ2OkG2n4Cx7GBGoYLSDW0hsarqyAPNGHq8mo3oWw9uysgjklZuFCRqOAEBm41NxXW64VrB3BKQHxnD/uyLqV/HfkAqzIYryTiOzqp8qL2JxkdexHM+cb2i0C2gK4D9/fEs8Jj3n8/HvtNCEVcLq/JXo2lcXmduKZq0i5TfwmSePGMorScReZZ0bj/55vbEp5QtVu8YoPJpxR6Cb5rzGAp/7D0t8lufv1xlJsj0P9ygbOkfYAQDkrlrtMkdjuf/3vK1BbrJl5ypt4cjb0E3BKlmlw5BwGkOIdvnpRkfJido1stvWv2SfKtke7909Zyi5wyYaEtzcl66a0/D8U6uV3klo7VBbjptJ3MpgIv7dYoAwReSGurJ3Ih6C4jMpdlbDABn0w267wfLdebk9zrSvigqzmZQTD2/MHiR8GKU49RMr0o2o8Sr0nq/6Lw5ITf7qKBDRB2OM1FfBl8y+NpWeeuooRcjnZvKDUO/PzeGV6EGrKw03dgoEerj70pyMaU0z+2c9mTnMSetTS7IYqn6hLZ0Pyjlut7Rs9yXu932H0prVCRUhIPEWO9oLHpf2NtULaDExaTUw/czz3wU=","X-Amzn-Trace-Id":"Root=1-5bfceab8-8d8ecd80bb833f18e5bfeaa8","X-Forwarded-For":"50.194.54.222, 52.46.17.6","X-Forwarded-Port":"443","X-Forwarded-Proto":"https"},"multiValueHeaders":{"Accept":["application/json"],"Accept-Encoding":["gzip, deflate, br"],"Accept-Language":["en-US,en;q=0.9"],"CloudFront-Forwarded-Proto":["https"],"CloudFront-Is-Desktop-Viewer":["true"],"CloudFront-Is-Mobile-Viewer":["false"],"CloudFront-Is-SmartTV-Viewer":["false"],"CloudFront-Is-Tablet-Viewer":["false"],"CloudFront-Viewer-Country":["US"],"content-type":["application/x-www-form-urlencoded"],"Host":["api.dev.npkproject.io"],"origin":["http://localhost"],"Referer":["http://localhost/"],"User-Agent":["Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36"],"Via":["2.0 e272b56ab8dd1450f3dbafeb0f3671a9.cloudfront.net (CloudFront)"],"X-Amz-Cf-Id":["A9nXiHbOExyXOHnl-2N835ZYT4ZjkqXR1VKG3ywoza4idIzSRYI9cQ=="],"x-amz-date":["20181127T065656Z"],"x-amz-security-token":["AgoGb3JpZ2luEGoaCXVzLXdlc3QtMiKAAiB2t14FBMR0I4whJsH6Q1cWYc8KC7wko545FycoqmJVYCjioNqivA8lUqPomr0cs38+xfXX+h3ITtM/B8Qeeepya+AHYTDq620E+tHjinBxW5RIRqbGB5mEYfKcLCCVl0bSE5ABdTpiScOr2YqW/aHy7dV+NDKvWZNyoltsgAcCjQKWitO6x23bpT+Qf8N9eCNkBomeY7Ad04E+wc1DHMEnhY7c0z2QO6pbSJY/tXuKFJCU5+W8QSp9lycBEuH3MkOSOQYsijMs0+cWiNbTzRLH4t+edVwdkf0EZFYM8Ewe/xCkyLeqTjTPn6lgFswgD/yrmOMVto75DHorz96IS7cqpgUIEBAAGgw4OTIyMDUxMTU1NjYiDM42Ra/uQcFVILls9iqDBSMnTsq1gqe161mvylCCoA1LvUC9eqAu4QbgUazOdCsj6Zh5MDwP6DdhGKEd3FPhJjTU8S1/J3FKbvJfVzSAgdx9WBK8F99iRtvAeMQT9MJab20dbYeEFT4+g3OAogXuKC92fC4EwmmpkY5KTbx9xrXDXxeXwGUgOk7uZEQX7iXsC6a09GgTTLL+UvxUy/M8Py4o1H02sBFwPgOyZ5yRfz4gHByqjWzBOkJihL6qoZAtVjS8s4wmn7sC5T1ckFMXe8TF18s8Upjm/O1npJYMJZ2OkG2n4Cx7GBGoYLSDW0hsarqyAPNGHq8mo3oWw9uysgjklZuFCRqOAEBm41NxXW64VrB3BKQHxnD/uyLqV/HfkAqzIYryTiOzqp8qL2JxkdexHM+cb2i0C2gK4D9/fEs8Jj3n8/HvtNCEVcLq/JXo2lcXmduKZq0i5TfwmSePGMorScReZZ0bj/55vbEp5QtVu8YoPJpxR6Cb5rzGAp/7D0t8lufv1xlJsj0P9ygbOkfYAQDkrlrtMkdjuf/3vK1BbrJl5ypt4cjb0E3BKlmlw5BwGkOIdvnpRkfJido1stvWv2SfKtke7909Zyi5wyYaEtzcl66a0/D8U6uV3klo7VBbjptJ3MpgIv7dYoAwReSGurJ3Ih6C4jMpdlbDABn0w267wfLdebk9zrSvigqzmZQTD2/MHiR8GKU49RMr0o2o8Sr0nq/6Lw5ITf7qKBDRB2OM1FfBl8y+NpWeeuooRcjnZvKDUO/PzeGV6EGrKw03dgoEerj70pyMaU0z+2c9mTnMSetTS7IYqn6hLZ0Pyjlut7Rs9yXu932H0prVCRUhIPEWO9oLHpf2NtULaDExaTUw/czz3wU="],"X-Amzn-Trace-Id":["Root=1-5bfceab8-8d8ecd80bb833f18e5bfeaa8"],"X-Forwarded-For":["50.194.54.222, 52.46.17.6"],"X-Forwarded-Port":["443"],"X-Forwarded-Proto":["https"]},"queryStringParameters":null,"multiValueQueryStringParameters":null,"pathParameters":{"proxy":"campaign/12344"},"stageVariables":null,"requestContext":{"resourceId":"21tcvc","resourcePath":"/userproxy/{proxy+}","httpMethod":"DELETE","extendedRequestId":"RAmc1Hl1PHcFToA=","requestTime":"27/Nov/2018:06:56:56 +0000","path":"/v1/userproxy/campaign/12344","accountId":"892205115566","protocol":"HTTP/1.1","stage":"v1","domainPrefix":"api","requestTimeEpoch":1543301816514,"requestId":"a10cda32-f211-11e8-a003-1d4c6934ba7d","identity":{"cognitoIdentityPoolId":"us-west-2:804f962c-dbf0-4cb3-89d8-799110696b31","accountId":"892205115566","cognitoIdentityId":"us-west-2:b8eb71dd-3fe2-44ae-bfa2-0d0ab3a22743","caller":"AROAJ555JTA7CRPEFMDXE:CognitoIdentityCredentials","sourceIp":"50.194.54.222","accessKey":"ASIA47O4RVCXAYQ2HOG3","cognitoAuthenticationType":"authenticated","cognitoAuthenticationProvider":"cognito-idp.us-west-2.amazonaws.com/us-west-2_ZokBjJS8x,cognito-idp.us-west-2.amazonaws.com/us-west-2_ZokBjJS8x:CognitoSignIn:dff6dfea-45eb-4870-b697-cdcfc05692ec","userArn":"arn:aws:sts::892205115566:assumed-role/cognito_authenticated_role_20181005031702531300000001/CognitoIdentityCredentials","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.77 Safari/537.36","user":"AROAJ555JTA7CRPEFMDXE:CognitoIdentityCredentials"},"domainName":"api.dev.npkproject.io","apiId":"eg8uhhcgg9"},"body":"test","isBase64Encoded":false},"context":{"callbackWaitsForEmptyEventLoop":true,"logGroupName":"/aws/lambda/proxy_api_handler","logStreamName":"2018/11/27/[$LATEST]72b8e7cc291c40f59a0ad1d9890931a6","functionName":"proxy_api_handler","memoryLimitInMB":"128","functionVersion":"$LATEST","invokeid":"a10f9997-f211-11e8-a029-91d9e4a3a1af","awsRequestId":"a10f9997-f211-11e8-a029-91d9e4a3a1af","invokedFunctionArn":"arn:aws:lambda:us-west-2:892205115566:function:proxy_api_handler"},"success":true}');


/*
sim.event.body = {
 "region": "us-west-2",
 "availabilityZone": "us-west-2c",
 "instanceType": "p2.xlarge",
 "hashFile": "uploads/md5sums",
 "instanceCount": "3",
 "instanceDuration": "9",
 "priceTarget": 198.288,
 "mask": "?a?a?d",
 "dictionaryFile": "wordlist/rockyou.7z",
 "rulesFiles": [
  "rules/d3ad0ne.rule.7z"
 ],
 "campaignId": 0,
 "cognitoIdentityId": 0,
 "spotFleetRequestId": "sfr-57485354-b918-4697-a746-013141f9f2d5"
};
*/

//sim.event.body = JSON.parse('{"region":"us-west-2","availabilityZone":"us-west-2c","instanceType":"p3.16xlarge","hashFile":"uploads/md5sums","hashFileUrl":"https://npk-user-data-20181002224350176600000001.s3.us-west-2.amazonaws.com/us-west-2%3Ab8eb71dd-3fe2-44ae-bfa2-0d0ab3a22743/uploads/md5sums?AWSAccessKeyId=ASIA47O4RVCXPG2VBIMN&Expires=1544922993&Signature=XGGbQw%2Bj%2B2n82eFJlqJ%2B6rlk%2Boc%3D&x-amz-security-token=AgoGb3JpZ2luECwaCXVzLXdlc3QtMiKAAnzVMIhDuHQ8vNAIpRH8wy%2Fd3%2BtNMUCUQQnN%2BJTVQmsxkmTFXXNtGfY24dp6B0dh6Yx8amV3hGpzapiIaOksoFJLHU9oZ4NtiHWlHC0sSXKxk3mF%2B21laOiIUlvBKMrC1TX%2FQSq7VWgwrNAHd1t7beQ8f4ik4xg90Vlqg0veF6HA6O%2BhFuUlSRWm%2BXbZkhsxGHXUfUiht5D8gk%2FrrFUsmXHfWDB72F725QBvDFctqxIfd28fCFaXNN8v3%2B6b3Ia7EiDM1hj2cK%2Bd7xxPEyOIg%2FDX7Q90%2FfZC3nNXa9iwp10cisIizS5Y0e%2FPUtjnk3ar%2FdpcKFExryacVsj6vCQER6wqrwUI4f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw4OTIyMDUxMTU1NjYiDD6r888gcDNKCtm4HCqDBfJZbvGi8pAmxekIkEG5ij6fgvCdUdgHteSKLJhBcCe%2BpmUxbqsT4or9RpBHkbraWojx0LljfKU%2FFWQ4jJiuwcAahVfQZ8hpjZTd8Rs7hXx%2BZ0TMUFP1jnQm4jb5DiEUyPuHKP%2Ft%2FIvWdoZiSdhhmENDLewTjkZyMANS%2By6tLoblZM6rNsmxtxIUgBoNHMj4nPZLcJbhaoaZW2NFTd8K4uAPtZH4ivQ47kNu35W%2BX3CDXbByUv2%2BaCf8XBQ%2FtVx8wzuSOPBCanOayPfqAld7%2BK5XWIDt9JaLztqnnoNQ%2Bpw2jhiLUwLKeW710VaYFtF4UfaMJPQ5FnU2Qzbz%2BPIzwPbF6D%2B7kmD19RrWiQmD3U6A0%2B%2BQ83RSRfcEuUXswWgd1v09kuVMfzr2dii7FtdxZgonFdfIWtls1F7mccjeKS4nJgdd4TujD8NExe56qElMVle3aOBwi1GMSJ5lKiyszdqhbsvBB1rhQhIOURxj1C6ndAhnmp%2Bm1icw12gqJzCJPY9dw48484PhsxJbuYXX%2B4p7rpXgojuqTHnRrYhWmhk1pePwqXyZ%2FspOFVc1q2Fv%2F56v6jOhnEh7SB0VY0azz69x9igS8n2692xfaR%2FQDNmQKBtxIC3HOCcxVS3CMzbJ9%2FH9HjoIASMn9n2l26YzGZ5WxFuiIYHrwFiG8R6%2BYIcIiUpiEyRh2kXtOzsTSp0rcN9Uc%2FLC6Q6YjnNYfYMOqLVpapR5%2FhpO0c5Fq2jqd4yRwm5Id4KPPaQ0HWaySoJr%2Bp%2BGEeFD2h78Xx4D%2FE%2B9I3NBG1eP5c4QTmpfi%2F28dkew2B1Kh8EV9fRhBKsygn1uh0Zy3KQWCWFZ5H5NJNnZfut0L%2FgwzbLW4AU%3D","instanceCount":2,"instanceDuration":4,"priceTarget":58.752,"mask":"?a?a","dictionaryFile":"wordlist/rockyou.7z","rulesFiles":["rules/d3ad0ne.rule.7z"]}');

/* Spot Monitor

var handler = require("./spot_monitor/main");

var sim = {event: {}, context: {}};

sim.event = JSON.parse('{"Records":[{"messageId":"c80e8021-a70a-42c7-a470-796e1186f753","receiptHandle":"AQEBJQ+/u6NsnT5t8Q/VbVxgdUl4TMKZ5FqhksRdIQvLBhwNvADoBxYSOVeCBXdnS9P+erlTtwEALHsnBXynkfPLH3BOUqmgzP25U8kl8eHzq6RAlzrSOfTO8ox9dcp6GLmW33YjO3zkq5VRYyQlJgLCiAZUpY2D4UQcE5D1Vm8RoKfbE+xtVaOctYeINjaQJ1u3mWx9T7tork3uAlOe1uyFjCWU5aPX/1OHhWCGi2EPPZj6vchNqDOJC/Y2k1gkivqCjz1CZl6FlZ7UVPOx3AMoszPuOYZ+Nuqpx2uCE2MHTtMHD8PVjlsWirt56oUr6JPp9aRGo6bitPIOmi4dX0FmuMKD6u/JnuZCp+AXtJVTmSHS8IXt/twsKU7A+fiMK01NtD5msNgVPoe9JbFtlGwvTQ==","body":"","attributes":{"ApproximateReceiveCount":"3","SentTimestamp":"1529104986221","SenderId":"594035263019","ApproximateFirstReceiveTimestamp":"1529104986230"},"messageAttributes":{},"md5OfBody":"9bb58f26192e4ba00f01e2e7b136bbd8","eventSource":"aws:sqs","eventSourceARN":"arn:aws:sqs:us-west-2:123456789012:MyQueue","awsRegion":"us-west-2"}]}');
sim.event.Records[0].body = JSON.stringify({
 "region": "us-west-2",
 "availabilityZone": "us-west-2c",
 "instanceType": "t3.nano",
 "hashFile": "uploads/README.md",
 "instanceCount": "3",
 "instanceDuration": "9",
 "priceTarget": 198.288,
 "mask": "?a?a?d",
 "dictionaryFile": "wordlist/rockyou.7z",
 "rulesFiles": [
  "rules/d3ad0ne.rule.7z"
 ],
 "campaignId": 0,
 "cognitoIdentityId": 0,
 "spotFleetRequestId": "sfr-57485354-b918-4697-a746-013141f9f2d5"
});

*/

handler.main(sim.event, sim.context, function(err, data) {
	if (err) {
		throw Error(err);
	} else {
		console.log(data);
	}

	process.exit(0);
});