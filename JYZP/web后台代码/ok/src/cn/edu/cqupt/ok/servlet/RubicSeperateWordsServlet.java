package cn.edu.cqupt.ok.servlet;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.google.gson.JsonObject;

import cn.edu.cqupt.ok.exception.HttpRequestException;
import cn.edu.cqupt.ok.po.ResearchForm;
import cn.edu.cqupt.ok.utils.HttpRequest;
import cn.edu.cqupt.ok.utils.JsonUtils;
import cn.edu.cqupt.ok.utils.UrlUtils;


@WebServlet("/RubicSeperateWordsServlet")
public class RubicSeperateWordsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	@Override
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		JsonObject jsonObject = JsonUtils.getJsonObject();
		if(request.getParameter("ResearchForm") != null) {
			ResearchForm researchForm = JsonUtils.getEntity(request.getParameter("ResearchForm"), ResearchForm.class);
			String content = researchForm.getContent();
			//String content = "我喜欢java";
			if(content != null) {
				String seperateWordsApi = UrlUtils.seperateWordsUrl();
				JsonObject outJsonObject = JsonUtils.getJsonObject();
				JsonObject inJsonObject = JsonUtils.getJsonObject();
				outJsonObject.addProperty("apiid", "301");
				inJsonObject.addProperty("a", content);
				inJsonObject.addProperty("b", "1");
				outJsonObject.add("attrs", inJsonObject);
				outJsonObject.addProperty("userid", 4);
				try {
					if(!JsonUtils.parseJsonObject(HttpRequest.postRequest(seperateWordsApi, outJsonObject)).toString().contains("errmsg") ) {
						String seperateWords = JsonUtils.parseJsonObject(HttpRequest.postRequest(seperateWordsApi, outJsonObject)).get("a").getAsString();
						JsonObject _outJsonObject = JsonUtils.getJsonObject();
						JsonObject _inJsonObject = JsonUtils.getJsonObject();
						_outJsonObject.addProperty("apiid", "483");
						_inJsonObject.addProperty("content", seperateWords);
						_inJsonObject.addProperty("label", "null");
						_outJsonObject.add("attrs", _inJsonObject);
						_outJsonObject.addProperty("userid", 197);
						String expandWordsApi = UrlUtils.labelExpandWordsUrl();
						if(!JsonUtils.parseJsonObject(HttpRequest.postRequest(expandWordsApi, _outJsonObject)).toString().contains("errmsg")) {
							researchForm.setContent(JsonUtils.parseJsonObject(HttpRequest.postRequest(expandWordsApi, _outJsonObject)).get("label").getAsString());
							response.getWriter().write(JsonUtils.EntityToJson(researchForm));
						} else {
							jsonObject.addProperty("msg", "无效扩词");
							response.getWriter().write(jsonObject.toString());
						}
					} else {
						jsonObject.addProperty("msg", "无效分词");
						response.getWriter().write(jsonObject.toString());
					}
				} catch (HttpRequestException e) {
					jsonObject.addProperty("msg", e.getMessage());
					response.getWriter().write(jsonObject.toString());
				}
		} else {
			jsonObject.addProperty("msg", "非法访问");				
			response.getWriter().write(jsonObject.toString());			
			}
		} else {
			jsonObject.addProperty("msg", "非法访问");
			response.getWriter().write(jsonObject.toString());
		}
	}

	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGet(request, response);
	}

}
