import"./modulepreload-polyfill-B5Qt9EMX.js";var $;(function(t){t.STRING="string",t.NUMBER="number",t.INTEGER="integer",t.BOOLEAN="boolean",t.ARRAY="array",t.OBJECT="object"})($||($={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(t){t.LANGUAGE_UNSPECIFIED="language_unspecified",t.PYTHON="python"})(U||(U={}));var H;(function(t){t.OUTCOME_UNSPECIFIED="outcome_unspecified",t.OUTCOME_OK="outcome_ok",t.OUTCOME_FAILED="outcome_failed",t.OUTCOME_DEADLINE_EXCEEDED="outcome_deadline_exceeded"})(H||(H={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const B=["user","model","function","system"];var F;(function(t){t.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",t.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",t.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",t.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",t.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(F||(F={}));var j;(function(t){t.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",t.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",t.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",t.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",t.BLOCK_NONE="BLOCK_NONE"})(j||(j={}));var k;(function(t){t.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",t.NEGLIGIBLE="NEGLIGIBLE",t.LOW="LOW",t.MEDIUM="MEDIUM",t.HIGH="HIGH"})(k||(k={}));var K;(function(t){t.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",t.SAFETY="SAFETY",t.OTHER="OTHER"})(K||(K={}));var m;(function(t){t.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",t.STOP="STOP",t.MAX_TOKENS="MAX_TOKENS",t.SAFETY="SAFETY",t.RECITATION="RECITATION",t.LANGUAGE="LANGUAGE",t.OTHER="OTHER"})(m||(m={}));var Y;(function(t){t.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",t.RETRIEVAL_QUERY="RETRIEVAL_QUERY",t.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",t.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",t.CLASSIFICATION="CLASSIFICATION",t.CLUSTERING="CLUSTERING"})(Y||(Y={}));var q;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.AUTO="AUTO",t.ANY="ANY",t.NONE="NONE"})(q||(q={}));var P;(function(t){t.MODE_UNSPECIFIED="MODE_UNSPECIFIED",t.MODE_DYNAMIC="MODE_DYNAMIC"})(P||(P={}));/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f extends Error{constructor(e){super(`[GoogleGenerativeAI Error]: ${e}`)}}class I extends f{constructor(e,n){super(e),this.response=n}}class tt extends f{constructor(e,n,s,o){super(e),this.status=n,this.statusText=s,this.errorDetails=o}}class C extends f{}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct="https://generativelanguage.googleapis.com",dt="v1beta",lt="0.21.0",ut="genai-js";var p;(function(t){t.GENERATE_CONTENT="generateContent",t.STREAM_GENERATE_CONTENT="streamGenerateContent",t.COUNT_TOKENS="countTokens",t.EMBED_CONTENT="embedContent",t.BATCH_EMBED_CONTENTS="batchEmbedContents"})(p||(p={}));class ft{constructor(e,n,s,o,i){this.model=e,this.task=n,this.apiKey=s,this.stream=o,this.requestOptions=i}toString(){var e,n;const s=((e=this.requestOptions)===null||e===void 0?void 0:e.apiVersion)||dt;let i=`${((n=this.requestOptions)===null||n===void 0?void 0:n.baseUrl)||ct}/${s}/${this.model}:${this.task}`;return this.stream&&(i+="?alt=sse"),i}}function ht(t){const e=[];return t!=null&&t.apiClient&&e.push(t.apiClient),e.push(`${ut}/${lt}`),e.join(" ")}async function gt(t){var e;const n=new Headers;n.append("Content-Type","application/json"),n.append("x-goog-api-client",ht(t.requestOptions)),n.append("x-goog-api-key",t.apiKey);let s=(e=t.requestOptions)===null||e===void 0?void 0:e.customHeaders;if(s){if(!(s instanceof Headers))try{s=new Headers(s)}catch(o){throw new C(`unable to convert customHeaders value ${JSON.stringify(s)} to Headers: ${o.message}`)}for(const[o,i]of s.entries()){if(o==="x-goog-api-key")throw new C(`Cannot set reserved header name ${o}`);if(o==="x-goog-api-client")throw new C(`Header name ${o} can only be set using the apiClient field`);n.append(o,i)}}return n}async function Et(t,e,n,s,o,i){const a=new ft(t,e,n,s,i);return{url:a.toString(),fetchOptions:Object.assign(Object.assign({},vt(i)),{method:"POST",headers:await gt(a),body:o})}}async function b(t,e,n,s,o,i={},a=fetch){const{url:r,fetchOptions:d}=await Et(t,e,n,s,o,i);return Ct(r,d,a)}async function Ct(t,e,n=fetch){let s;try{s=await n(t,e)}catch(o){pt(o,t)}return s.ok||await _t(s,t),s}function pt(t,e){let n=t;throw t instanceof tt||t instanceof C||(n=new f(`Error fetching from ${e.toString()}: ${t.message}`),n.stack=t.stack),n}async function _t(t,e){let n="",s;try{const o=await t.json();n=o.error.message,o.error.details&&(n+=` ${JSON.stringify(o.error.details)}`,s=o.error.details)}catch{}throw new tt(`Error fetching from ${e.toString()}: [${t.status} ${t.statusText}] ${n}`,t.status,t.statusText,s)}function vt(t){const e={};if((t==null?void 0:t.signal)!==void 0||(t==null?void 0:t.timeout)>=0){const n=new AbortController;(t==null?void 0:t.timeout)>=0&&setTimeout(()=>n.abort(),t.timeout),t!=null&&t.signal&&t.signal.addEventListener("abort",()=>{n.abort()}),e.signal=n.signal}return e}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(t){return t.text=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),N(t.candidates[0]))throw new I(`${E(t)}`,t);return yt(t)}else if(t.promptFeedback)throw new I(`Text not available. ${E(t)}`,t);return""},t.functionCall=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),N(t.candidates[0]))throw new I(`${E(t)}`,t);return console.warn("response.functionCall() is deprecated. Use response.functionCalls() instead."),V(t)[0]}else if(t.promptFeedback)throw new I(`Function call not available. ${E(t)}`,t)},t.functionCalls=()=>{if(t.candidates&&t.candidates.length>0){if(t.candidates.length>1&&console.warn(`This response had ${t.candidates.length} candidates. Returning function calls from the first candidate only. Access response.candidates directly to use the other candidates.`),N(t.candidates[0]))throw new I(`${E(t)}`,t);return V(t)}else if(t.promptFeedback)throw new I(`Function call not available. ${E(t)}`,t)},t}function yt(t){var e,n,s,o;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.text&&i.push(a.text),a.executableCode&&i.push("\n```"+a.executableCode.language+`
`+a.executableCode.code+"\n```\n"),a.codeExecutionResult&&i.push("\n```\n"+a.codeExecutionResult.output+"\n```\n");return i.length>0?i.join(""):""}function V(t){var e,n,s,o;const i=[];if(!((n=(e=t.candidates)===null||e===void 0?void 0:e[0].content)===null||n===void 0)&&n.parts)for(const a of(o=(s=t.candidates)===null||s===void 0?void 0:s[0].content)===null||o===void 0?void 0:o.parts)a.functionCall&&i.push(a.functionCall);if(i.length>0)return i}const It=[m.RECITATION,m.SAFETY,m.LANGUAGE];function N(t){return!!t.finishReason&&It.includes(t.finishReason)}function E(t){var e,n,s;let o="";if((!t.candidates||t.candidates.length===0)&&t.promptFeedback)o+="Response was blocked",!((e=t.promptFeedback)===null||e===void 0)&&e.blockReason&&(o+=` due to ${t.promptFeedback.blockReason}`),!((n=t.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(o+=`: ${t.promptFeedback.blockReasonMessage}`);else if(!((s=t.candidates)===null||s===void 0)&&s[0]){const i=t.candidates[0];N(i)&&(o+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(o+=`: ${i.finishMessage}`))}return o}function w(t){return this instanceof w?(this.v=t,this):new w(t)}function mt(t,e,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var s=n.apply(t,e||[]),o,i=[];return o={},a("next"),a("throw"),a("return"),o[Symbol.asyncIterator]=function(){return this},o;function a(l){s[l]&&(o[l]=function(c){return new Promise(function(u,y){i.push([l,c,u,y])>1||r(l,c)})})}function r(l,c){try{d(s[l](c))}catch(u){v(i[0][3],u)}}function d(l){l.value instanceof w?Promise.resolve(l.value.v).then(h,_):v(i[0][2],l)}function h(l){r("next",l)}function _(l){r("throw",l)}function v(l,c){l(c),i.shift(),i.length&&r(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function Ot(t){const e=t.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=St(e),[s,o]=n.tee();return{stream:wt(s),response:Rt(o)}}async function Rt(t){const e=[],n=t.getReader();for(;;){const{done:s,value:o}=await n.read();if(s)return x(At(e));e.push(o)}}function wt(t){return mt(this,arguments,function*(){const n=t.getReader();for(;;){const{value:s,done:o}=yield w(n.read());if(o)break;yield yield w(x(s))}})}function St(t){const e=t.getReader();return new ReadableStream({start(s){let o="";return i();function i(){return e.read().then(({value:a,done:r})=>{if(r){if(o.trim()){s.error(new f("Failed to parse stream"));return}s.close();return}o+=a;let d=o.match(J),h;for(;d;){try{h=JSON.parse(d[1])}catch{s.error(new f(`Error parsing JSON response: "${d[1]}"`));return}s.enqueue(h),o=o.substring(d[0].length),d=o.match(J)}return i()})}}})}function At(t){const e=t[t.length-1],n={promptFeedback:e==null?void 0:e.promptFeedback};for(const s of t){if(s.candidates)for(const o of s.candidates){const i=o.index;if(n.candidates||(n.candidates=[]),n.candidates[i]||(n.candidates[i]={index:o.index}),n.candidates[i].citationMetadata=o.citationMetadata,n.candidates[i].groundingMetadata=o.groundingMetadata,n.candidates[i].finishReason=o.finishReason,n.candidates[i].finishMessage=o.finishMessage,n.candidates[i].safetyRatings=o.safetyRatings,o.content&&o.content.parts){n.candidates[i].content||(n.candidates[i].content={role:o.content.role||"user",parts:[]});const a={};for(const r of o.content.parts)r.text&&(a.text=r.text),r.functionCall&&(a.functionCall=r.functionCall),r.executableCode&&(a.executableCode=r.executableCode),r.codeExecutionResult&&(a.codeExecutionResult=r.codeExecutionResult),Object.keys(a).length===0&&(a.text=""),n.candidates[i].content.parts.push(a)}}s.usageMetadata&&(n.usageMetadata=s.usageMetadata)}return n}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function et(t,e,n,s){const o=await b(e,p.STREAM_GENERATE_CONTENT,t,!0,JSON.stringify(n),s);return Ot(o)}async function nt(t,e,n,s){const i=await(await b(e,p.GENERATE_CONTENT,t,!1,JSON.stringify(n),s)).json();return{response:x(i)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function st(t){if(t!=null){if(typeof t=="string")return{role:"system",parts:[{text:t}]};if(t.text)return{role:"system",parts:[t]};if(t.parts)return t.role?t:{role:"system",parts:t.parts}}}function S(t){let e=[];if(typeof t=="string")e=[{text:t}];else for(const n of t)typeof n=="string"?e.push({text:n}):e.push(n);return bt(e)}function bt(t){const e={role:"user",parts:[]},n={role:"function",parts:[]};let s=!1,o=!1;for(const i of t)"functionResponse"in i?(n.parts.push(i),o=!0):(e.parts.push(i),s=!0);if(s&&o)throw new f("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");if(!s&&!o)throw new f("No content is provided for sending chat message.");return s?e:n}function Nt(t,e){var n;let s={model:e==null?void 0:e.model,generationConfig:e==null?void 0:e.generationConfig,safetySettings:e==null?void 0:e.safetySettings,tools:e==null?void 0:e.tools,toolConfig:e==null?void 0:e.toolConfig,systemInstruction:e==null?void 0:e.systemInstruction,cachedContent:(n=e==null?void 0:e.cachedContent)===null||n===void 0?void 0:n.name,contents:[]};const o=t.generateContentRequest!=null;if(t.contents){if(o)throw new C("CountTokensRequest must have one of contents or generateContentRequest, not both.");s.contents=t.contents}else if(o)s=Object.assign(Object.assign({},s),t.generateContentRequest);else{const i=S(t);s.contents=[i]}return{generateContentRequest:s}}function W(t){let e;return t.contents?e=t:e={contents:[S(t)]},t.systemInstruction&&(e.systemInstruction=st(t.systemInstruction)),e}function Tt(t){return typeof t=="string"||Array.isArray(t)?{content:S(t)}:t}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const X=["text","inlineData","functionCall","functionResponse","executableCode","codeExecutionResult"],Mt={user:["text","inlineData"],function:["functionResponse"],model:["text","functionCall","executableCode","codeExecutionResult"],system:["text"]};function Lt(t){let e=!1;for(const n of t){const{role:s,parts:o}=n;if(!e&&s!=="user")throw new f(`First content should be with role 'user', got ${s}`);if(!B.includes(s))throw new f(`Each item should include role field. Got ${s} but valid roles are: ${JSON.stringify(B)}`);if(!Array.isArray(o))throw new f("Content should have 'parts' property with an array of Parts");if(o.length===0)throw new f("Each Content should have at least one part");const i={text:0,inlineData:0,functionCall:0,functionResponse:0,fileData:0,executableCode:0,codeExecutionResult:0};for(const r of o)for(const d of X)d in r&&(i[d]+=1);const a=Mt[s];for(const r of X)if(!a.includes(r)&&i[r]>0)throw new f(`Content with role '${s}' can't contain '${r}' part`);e=!0}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q="SILENT_ERROR";class xt{constructor(e,n,s,o={}){this.model=n,this.params=s,this._requestOptions=o,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=e,s!=null&&s.history&&(Lt(s.history),this._history=s.history)}async getHistory(){return await this._sendPromise,this._history}async sendMessage(e,n={}){var s,o,i,a,r,d;await this._sendPromise;const h=S(e),_={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(d=this.params)===null||d===void 0?void 0:d.cachedContent,contents:[...this._history,h]},v=Object.assign(Object.assign({},this._requestOptions),n);let l;return this._sendPromise=this._sendPromise.then(()=>nt(this._apiKey,this.model,_,v)).then(c=>{var u;if(c.response.candidates&&c.response.candidates.length>0){this._history.push(h);const y=Object.assign({parts:[],role:"model"},(u=c.response.candidates)===null||u===void 0?void 0:u[0].content);this._history.push(y)}else{const y=E(c.response);y&&console.warn(`sendMessage() was unsuccessful. ${y}. Inspect response object for details.`)}l=c}),await this._sendPromise,l}async sendMessageStream(e,n={}){var s,o,i,a,r,d;await this._sendPromise;const h=S(e),_={safetySettings:(s=this.params)===null||s===void 0?void 0:s.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,tools:(i=this.params)===null||i===void 0?void 0:i.tools,toolConfig:(a=this.params)===null||a===void 0?void 0:a.toolConfig,systemInstruction:(r=this.params)===null||r===void 0?void 0:r.systemInstruction,cachedContent:(d=this.params)===null||d===void 0?void 0:d.cachedContent,contents:[...this._history,h]},v=Object.assign(Object.assign({},this._requestOptions),n),l=et(this._apiKey,this.model,_,v);return this._sendPromise=this._sendPromise.then(()=>l).catch(c=>{throw new Error(Q)}).then(c=>c.response).then(c=>{if(c.candidates&&c.candidates.length>0){this._history.push(h);const u=Object.assign({},c.candidates[0].content);u.role||(u.role="model"),this._history.push(u)}else{const u=E(c);u&&console.warn(`sendMessageStream() was unsuccessful. ${u}. Inspect response object for details.`)}}).catch(c=>{c.message!==Q&&console.error(c)}),l}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dt(t,e,n,s){return(await b(e,p.COUNT_TOKENS,t,!1,JSON.stringify(n),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gt(t,e,n,s){return(await b(e,p.EMBED_CONTENT,t,!1,JSON.stringify(n),s)).json()}async function $t(t,e,n,s){const o=n.requests.map(a=>Object.assign(Object.assign({},a),{model:e}));return(await b(e,p.BATCH_EMBED_CONTENTS,t,!1,JSON.stringify({requests:o}),s)).json()}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z{constructor(e,n,s={}){this.apiKey=e,this._requestOptions=s,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.tools=n.tools,this.toolConfig=n.toolConfig,this.systemInstruction=st(n.systemInstruction),this.cachedContent=n.cachedContent}async generateContent(e,n={}){var s;const o=W(e),i=Object.assign(Object.assign({},this._requestOptions),n);return nt(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}async generateContentStream(e,n={}){var s;const o=W(e),i=Object.assign(Object.assign({},this._requestOptions),n);return et(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(s=this.cachedContent)===null||s===void 0?void 0:s.name},o),i)}startChat(e){var n;return new xt(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:(n=this.cachedContent)===null||n===void 0?void 0:n.name},e),this._requestOptions)}async countTokens(e,n={}){const s=Nt(e,{model:this.model,generationConfig:this.generationConfig,safetySettings:this.safetySettings,tools:this.tools,toolConfig:this.toolConfig,systemInstruction:this.systemInstruction,cachedContent:this.cachedContent}),o=Object.assign(Object.assign({},this._requestOptions),n);return Dt(this.apiKey,this.model,s,o)}async embedContent(e,n={}){const s=Tt(e),o=Object.assign(Object.assign({},this._requestOptions),n);return Gt(this.apiKey,this.model,s,o)}async batchEmbedContents(e,n={}){const s=Object.assign(Object.assign({},this._requestOptions),n);return $t(this.apiKey,this.model,e,s)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.apiKey=e}getGenerativeModel(e,n){if(!e.model)throw new f("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new z(this.apiKey,e,n)}getGenerativeModelFromCachedContent(e,n,s){if(!e.name)throw new C("Cached content must contain a `name` field.");if(!e.model)throw new C("Cached content must contain a `model` field.");const o=["model","systemInstruction"];for(const a of o)if(n!=null&&n[a]&&e[a]&&(n==null?void 0:n[a])!==e[a]){if(a==="model"){const r=n.model.startsWith("models/")?n.model.replace("models/",""):n.model,d=e.model.startsWith("models/")?e.model.replace("models/",""):e.model;if(r===d)continue}throw new C(`Different value for "${a}" specified in modelParams (${n[a]}) and cachedContent (${e[a]})`)}const i=Object.assign(Object.assign({},n),{model:e.model,tools:e.tools,toolConfig:e.toolConfig,systemInstruction:e.systemInstruction,cachedContent:e});return new z(this.apiKey,i,s)}}const Ht="51122b41f541e37ccc93611c7a8d7bbf",Z=document.getElementById("search"),M=document.getElementById("tableBody"),Bt=document.getElementById("pageInfo"),ot=document.getElementById("prevBtn"),it=document.getElementById("nextBtn"),O=document.getElementById("chatBox"),L=document.getElementById("userInput"),Ft=document.getElementById("sendBtn"),jt="AIzaSyCar8kQJSppSiKCUSaDKOLKW9EV7uYCjMc",kt=new Ut(jt),Kt=kt.getGenerativeModel({model:"gemini-1.5-flash"}),Yt="You are a weather chatbot that answers user queries based on weather data provided. Only respond to questions related to the weather, and redirect unrelated questions by saying: 'I can only assist with weather-related questions. How can I help you with the weather?'";let A=1;const T=5;let g=[],at="London";async function D(t){try{const e=await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${t}&appid=${Ht}`);if(!e.ok)throw new Error("City not found");const n=await e.json();return g=n.list.map(s=>({dateTime:new Date(s.dt*1e3).toLocaleString(),temp:Math.round(s.main.temp-273.15),weather:s.weather[0].main,humidity:s.main.humidity,windSpeed:s.wind.speed})),at=t,G(1),n}catch(e){throw console.error("Error fetching data:",e),M.innerHTML='<tr><td colspan="3" class="text-center text-red-500">City not found or error occurred.</td></tr>',e}}function G(t){M.innerHTML="";const e=(t-1)*T,n=Math.min(e+T,g.length);for(let o=e;o<n;o++){const i=`
            <tr>
                <td class="p-2 border-b">${g[o].dateTime}</td>
                <td class="p-2 border-b">${g[o].temp}°C</td>
                <td class="p-2 border-b">${g[o].weather}</td>
            </tr>
        `;M.innerHTML+=i}const s=Math.ceil(g.length/T);Bt.textContent=`Page ${t} of ${s}`,ot.disabled=t===1,it.disabled=t===s,A=t}ot.addEventListener("click",()=>{A>1&&G(A-1)});it.addEventListener("click",()=>{const t=Math.ceil(g.length/T);A<t&&G(A+1)});Z.addEventListener("keypress",async t=>{if(t.key==="Enter"){const e=Z.value.trim();if(e)try{await D(e),R(`Weather data for ${e} has been updated.`,!1)}catch{R(`Failed to fetch weather data for ${e}.`,!1)}}});function R(t,e=!1){const n=document.createElement("div");n.className=`mb-2 ${e?"text-right":"text-left"}`,n.innerHTML=`
        <span class="inline-block p-2 rounded-lg ${e?"bg-blue-500 text-white":"bg-gray-200 text-gray-800"}">
            ${t}
        </span>
    `,O.appendChild(n),O.scrollTop=O.scrollHeight}async function qt(t){try{const e=t.match(/in\s+(\w+)/i);let n=at;if(e){n=e[1];try{await D(n)}catch{return`I'm sorry, I couldn't find weather data for ${n}. Can you please check the city name and try again?`}}const s=g[0],o=JSON.stringify({city:n,currentWeather:s,forecast:g.slice(0,5)});return(await Kt.generateContent({contents:[{role:"user",parts:[{text:`${Yt}

Weather data: ${o}

User query: ${t}`}]}]})).response.text()}catch(e){console.error("Error generating response:",e)}}async function rt(){const t=L.value.trim();if(!t)return;R(t,!0),L.value="",R("Thinking...",!1);const e=await qt(t);O.removeChild(O.lastChild),R(e,!1)}Ft.addEventListener("click",rt);L.addEventListener("keypress",t=>{t.key==="Enter"&&rt()});D("London");
