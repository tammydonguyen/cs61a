# parent of class method is parent of class
global_var = 4

class Tester:
	class_attr = -4

	def testing(self):
		print(global_var)
		try:
			print(Tester.class_attr)
		except NameError as e:
			print(e)

t = Tester()
t.testing() # should print 4!

# classes can be defined within functions!
# parent of bar is foo
def foo():
	local_var = 5
	class Foo:
		def bar(self):
			print(local_var)
	return Foo()

foo().bar() # prints 5


# more random stuff

# classes can be defined within methods!
class Boo:
	x = 2

	def boo(self):
		class Far:
			def far(self):
				try:
					print(self.x)
				except AttributeError as e:
					print(e)
		return Far()

b = Boo()
b.boo().far() # errors
