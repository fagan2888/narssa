$(document).ready(function() {
	console.log(sample_article);
	LoadArticleDetails();
	
	$("#reactUser .btn").click(function(){
		var data= JSON.parse('{{ data|safe}}')
		for(var i=0; i< data.length;i++){
          var htmlchunk = 	'<div class="col-md-12">	\
								<h4>Recommendation based on your reaction</h4>	\
									<div class="row">	\
										{% for i in range(len(reco_len))%}\
										<div class="col-md-3">	\
											<figure>	\
											</figure>	\
											<p>{{ reco[i]['Headline'] }}</p>	\
										</div>	\
										{% endfor %}\
									</div>	\
								</div>';
		$("#content").append(htmlchunk);





		}
		
	});
});
function LoadArticleDetails(){

	$("#headline").html(headline);
	$("#summary").html(summary);
	$(".container-fluid figure").html('<img src=' + imageURL + ' alt="About image" />');
}
