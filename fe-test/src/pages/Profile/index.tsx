import { useEffect, useState, useCallback } from "react";
import styles from "./Profile.module.scss";
import classNames from "classnames/bind";
import Button from "@components/Button";
import Pagination from "@components/Pagination";
import PostModal from "./components/PostModal";
import type { PostFormData } from "./components/PostModal";
import postService from "@services/postService";
import type { PostResponse } from "@mytypes/post";
import { Icon } from "@iconify/react/dist/iconify.js";

const cx = classNames.bind(styles);

const Profile = () => {
  const [tags, setTags] = useState<string[]>([]);
  const [posts, setPosts] = useState<PostResponse[]>([]);
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [searchTitle, setSearchTitle] = useState<string>("");

  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<"create" | "edit">("create");
  const [editingPost, setEditingPost] = useState<PostResponse | null>(null);

  useEffect(() => {
    const fetchTags = async () => {
      try {
        const tagRes = await postService.getTags();
        setTags(tagRes.data);
      } catch (error) {
        console.error("Failed to fetch tags:", error);
      }
    };
    fetchTags();
  }, []);

  const fetchPosts = useCallback(async () => {
    try {
      const postRes = await postService.getPosts({
        tags: selectedTag || undefined,
        title: searchTitle || undefined,
        page: currentPage.toString(),
      });

      if (Array.isArray(postRes.data.posts)) {
        setPosts(postRes.data.posts);
        setTotalPages(postRes.data.total_page || 1);
      } else {
        console.warn("⚠️ postRes.data.posts is not array", postRes.data);
        setPosts([]);
        setTotalPages(1);
      }
    } catch (error) {
      console.error("Failed to fetch posts:", error);
    }
  }, [selectedTag, searchTitle, currentPage]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedTag, searchTitle]);

  const handleCreate = () => {
    setModalMode("create");
    setEditingPost(null);
    setIsModalOpen(true);
  };

  const handleEdit = (post: PostResponse) => {
    setModalMode("edit");
    setEditingPost(post);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (confirm("Are you sure you want to delete this post?")) {
      try {
        await postService.deletePost(id);
        fetchPosts();
      } catch (error) {
        console.error("Failed to delete post:", error);
      }
    }
  };

  const handleModalSubmit = async (data: PostFormData) => {
    try {
      if (modalMode === "create") {
        await postService.createPost(data);
      } else if (modalMode === "edit" && editingPost) {
        await postService.updatePost(editingPost.id, data);
      }
      setIsModalOpen(false);
      fetchPosts();
    } catch (error) {
      console.error("Failed to submit post:", error);
    }
  };

  return (
    <div className={cx("profile")}>
      <div className={cx("profile__actions")}>
        <Button className={cx("profile__actions-add")} onClick={handleCreate}>
          Add new
        </Button>

        <div className={cx("profile__actions-filters")}>
          <input
            type="text"
            placeholder="Search title..."
            value={searchTitle}
            onChange={(e) => setSearchTitle(e.target.value)}
            className={cx("profile__actions-filters-input")}
          />

          <select
            className={cx("profile__actions-filters-select")}
            value={selectedTag}
            onChange={(e) => setSelectedTag(e.target.value)}
          >
            <option value="">All tags</option>
            {tags.map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div>
      </div>

      <table className={cx("profile__table")}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Tags</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.description}</td>
              <td>
                {Array.isArray(post.tags) ? post.tags.join(", ") : post.tags}
              </td>
              <td>
                <div className={cx("profile__table-actions")}>
                  <button onClick={() => handleEdit(post)}>
                    <Icon icon="uil:pen" />
                  </button>
                  <button onClick={() => handleDelete(post.id)}>
                    <Icon icon="streamline-ultimate:bin-1-bold" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className={cx("profile__pagination")}>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>

      <PostModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleModalSubmit}
        tagSuggestions={tags}
        mode={modalMode}
        initialData={
          editingPost
            ? {
                title: editingPost.title,
                description: editingPost.description,
                tags: Array.isArray(editingPost.tags)
                  ? editingPost.tags
                  : editingPost.tags.split(",").map((t) => t.trim()),
              }
            : undefined
        }
      />
    </div>
  );
};

export default Profile;
