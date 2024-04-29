import {ZuploContext, ZuploRequest} from "@zuplo/runtime";

export default async function policy(
  request: ZuploRequest,
  context: ZuploContext,
  options: never,
  policyName: string
) {
  const auth = request.headers.get("authorization");

  if (auth.indexOf(".") > 5) {
    return context.invokeInboundPolicy('jwt', request)
  }

  return context.invokeInboundPolicy('api-key', request);
}
