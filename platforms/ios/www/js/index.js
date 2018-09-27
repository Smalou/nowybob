/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
      console.log("Initialization...")
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
        // document.getElementById("reload").addEventListener("click", loadPage);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    loadPage: function(){
      console.log("Load page...");

      if (navigator.connection.type == Connection.NONE) {
        document.getElementById("loadingPage").style.display = "none";
        document.getElementById("noInternet").style.display = "block";
      }
      else
      {
        console.log("weszlo do elsa...")
        var ref = cordova.InAppBrowser.open('http://vdctld06581.ics.cloud.ge.com', '_blank', 'location=no,toolbar=no,hidden=yes');
           ref.show();

        ref.addEventListener('loadstart', function(event) {
             document.getElementById("loadingPage").style.display = "block";
             document.getElementById("noInternet").style.display = "none";
             document.getElementById("error").style.display = "none";
           });

          ref.addEventListener('loadstop', function(event) {
            document.getElementById("loadingPage").style.display = "none";
            document.getElementById("noInternet").style.display = "none";
            document.getElementById("error").style.display = "none";
            console.log('wlazlo do loadstopa');
            ref.show();


           });

           ref.addEventListener('loaderror', function(event) {
             document.getElementById("loadingPage").style.display = "none";
             document.getElementById("noInternet").style.display = "none";
             document.getElementById("error").style.display = "block";

           });
         }
      },

      tryAgain: function(){
        document.getElementById("noInternet").style.display = "none";
        document.getElementById("error").style.display = "none";
        document.getElementById("loadingPage").style.display = "block";
        var showLoading = setTimeout(this.loadPage, 1000);
      },


      onDeviceReady: function() {
        console.log('ondeviceREady...');
          this.loadPage();
          this.receivedEvent('deviceready');
      },

      // Update DOM on a Received Event
      receivedEvent: function(id) {
          var parentElement = document.getElementById(id);

          if (parentElement != null) {
              var listeningElement = parentElement.querySelector('.listening');
              var receivedElement = parentElement.querySelector('.received');
                receivedElement.setAttribute('style', 'display:block;');
              listeningElement.setAttribute('style', 'display:none;');
          }


          console.log('Received Event: ' + id);
      }
  };

  app.initialize();
