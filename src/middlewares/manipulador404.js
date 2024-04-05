/* eslint-disable no-unused-vars */

import NotFound from "../errors/NotFound.js";

function manipulador404(req,res,next){
	const erro404 = new NotFound();
	next(erro404);
}

export default manipulador404;