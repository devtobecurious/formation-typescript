// Alias, just alias

type AliasString = string;

function returnAlias(): AliasString {
    return "hey";
}

let item: AliasString = returnAlias();
item = 'realstring';

// Alias, to hide union
type intOrString = number | string | null;

function useIntOrString(item: intOrString) {
    if (typeof item == "string") {
        
    } else if (typeof item === "number") {
        
    }
}