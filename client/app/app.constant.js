(function(angular, undefined) {
  angular.module("angularFullStackApp.constants", [])

.constant("appConfig", {
	"userRoles": [
		"guest",
		"user",
		"admin"
	]
})

;
})(angular);