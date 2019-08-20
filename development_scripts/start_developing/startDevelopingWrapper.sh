set willBeUnsetIfRunFromPowershell=true

if[$("willBeUnsetIfRunFromPowershell")=true] then
	echo "Not from powershell"

cmd /k