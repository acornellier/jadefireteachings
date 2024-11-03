import { Link as ReactRouterLink, type LinkProps as ReactRouterLinkProps } from 'react-router-dom'

interface Props extends ReactRouterLinkProps {}

export function RouterLink({ className, children, ...rest }: Props) {
  return (
    <ReactRouterLink {...rest}>
      <span className={`text-blue-500 hover:underline ${className}`}>{children}</span>
    </ReactRouterLink>
  )
}
