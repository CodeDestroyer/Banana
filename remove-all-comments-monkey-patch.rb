# I like multiline comments and headers oso this monkey patch removes all comments

class Sass::Tree::Visitors::Perform < Sass::Tree::Visitors::Base

  # Removes all comments completely
  def visit_comment(node)
    return []
  end

end
