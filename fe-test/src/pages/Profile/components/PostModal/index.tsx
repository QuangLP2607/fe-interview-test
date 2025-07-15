import React, { useState, useEffect } from "react";
import Modal from "@components/Modal";
import classNames from "classnames/bind";
import styles from "./PostModal.module.scss";

const cx = classNames.bind(styles);

export interface PostFormData {
  title: string;
  description: string;
  tags: string[];
}

interface PostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: PostFormData) => void;
  tagSuggestions: string[];
  initialData?: PostFormData;
  mode?: "create" | "edit";
}

const PostModal: React.FC<PostModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  tagSuggestions,
  initialData,
  mode = "create",
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState("");

  useEffect(() => {
    if (initialData) {
      setTitle(initialData.title);
      setDescription(initialData.description);
      setTags(initialData.tags);
    } else {
      setTitle("");
      setDescription("");
      setTags([]);
    }
    setTagInput("");
  }, [initialData, isOpen]);

  const handleRemoveTag = (tag: string) => {
    setTags(tags.filter((t) => t !== tag));
  };

  const handleSubmit = () => {
    if (!title.trim()) return alert("Title is required");
    onSubmit({ title, description, tags });
    onClose();
  };

  const filteredSuggestions = tagSuggestions.filter(
    (s) => s.toLowerCase().includes(tagInput.toLowerCase()) && !tags.includes(s)
  );

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={mode === "edit" ? "Edit Post" : "Create New Post"}
    >
      <div className={cx("form")}>
        <input
          className={cx("form__input")}
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className={cx("form__textarea")}
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <div className={cx("form__tag-input")}>
          <input
            type="text"
            placeholder="Search tag..."
            value={tagInput}
            onChange={(e) => setTagInput(e.target.value)}
            onKeyDown={(e) => e.preventDefault()} // Ngăn thêm tag thủ công
          />
        </div>

        <div className={cx("form__suggestions")}>
          {filteredSuggestions.length > 0 ? (
            filteredSuggestions.slice(0, 5).map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                className={cx("form__suggestion")}
                onClick={() => {
                  setTags([...tags, suggestion]);
                  setTagInput("");
                }}
              >
                {suggestion}
              </button>
            ))
          ) : (
            <p className={cx("form__no-suggestions")}>No matching tags</p>
          )}
        </div>

        <div className={cx("form__tags")}>
          {tags.map((tag) => (
            <span key={tag} className={cx("form__tag")}>
              {tag}
              <button
                type="button"
                className={cx("form__tag-remove")}
                onClick={() => handleRemoveTag(tag)}
              >
                ×
              </button>
            </span>
          ))}
        </div>

        <div className={cx("form__actions")}>
          <button
            type="button"
            className={cx("form__button", "form__button--primary")}
            onClick={handleSubmit}
          >
            {mode === "edit" ? "Update" : "Create"}
          </button>
          <button
            type="button"
            className={cx("form__button", "form__button--secondary")}
            onClick={onClose}
          >
            Cancel
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default PostModal;
