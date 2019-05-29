# Development experience:

In the development process I faced the issue: https://github.com/Tradeshift/tradeshift-ui/issues/203  
But with the workaround from this [comment](https://github.com/Tradeshift/tradeshift-ui/issues/203#issuecomment-287276390) it works fine.

# Decisions:

- Created the enum `TriangleType` with possible types of triangle. It would be useful for internalisation of the application so components can choose the correct words based on the selected language.

- Incapsulated the state to the `triangle-form` component so it can be added multiple times on the page without any issues.

- To check the existence of the triangle with provided sides I used the [Triangle inequality theorem](https://en.wikipedia.org/wiki/Triangle_inequality).
